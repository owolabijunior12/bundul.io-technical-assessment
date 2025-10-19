import { useState, useMemo } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/theme";
import { Header } from "@/components/Header";
import { PaymentCard } from "@/components/PaymentCard";
import { EmptyState } from "@/components/EmptyState";
import { usePayments } from "@/hooks/usePayments";
import PaymentModal from "@/components/PaymentModal";

export default function HomeScreen() {
  const { payments, refreshing, refreshData } = usePayments();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<"success" | "later">("success");
  const [selectedService, setSelectedService] = useState<string>("");
 
  const totalDue = useMemo(
    () => payments.reduce((sum: number, p: any) => sum + p.amount, 0),
    [payments]
  );

 
  const handlePayNow = (payment: any) => {
    setSelectedService(payment.service);
    setModalType("success");
    setModalVisible(true);
  };
 
  const handlePayLater = (payment: any) => {
    setSelectedService(payment.service);
    setModalType("later");
    setModalVisible(true);
  };

  return (
    <LinearGradient colors={[Colors.background, Colors.white]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header total={totalDue} />

        <FlatList
          data={[...payments].sort(
            (a: any, b: any) =>
              new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
          )}
          keyExtractor={(item: any) => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={refreshData} />
          }
          renderItem={({ item }) => (
            <PaymentCard
              payment={item}
              onPayNow={handlePayNow}
              onPayLater={handlePayLater}
            />
          )}

          ListEmptyComponent={<EmptyState />}
          contentContainerStyle={[
            styles.listContent,
            payments.length === 0 && styles.emptyListContainer,
          ]}
          showsVerticalScrollIndicator={false}
        />

        <PaymentModal
          visible={modalVisible}
          type={modalType}
          serviceName={selectedService}
          onClose={() => setModalVisible(false)}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 30,
    paddingTop: 8,
  },
   safeArea: {
    backgroundColor: Colors.primary,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
