 import { Colors } from "@/constants/theme";
import { formatCurrency } from "@/utils";
import React from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  total: number;
}

export const Header: React.FC<HeaderProps> = ({ total }) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primary}
        translucent={false} 
      />

      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Due Payments</Text>
          <Text style={styles.subtitle}>Your upcoming payment summary</Text>

          <View style={styles.amountCard}>
            <Text style={styles.label}>Total Due</Text>
            <Text style={styles.amount}>{formatCurrency(total)}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight ?? 20 : 50,
    paddingBottom: 60,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 5,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: Colors.white,
    textAlign: "center",
    letterSpacing: 0.6,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.85,
    marginTop: 6,
  },
  amountCard: {
    marginTop: 20,
    backgroundColor: Colors.white,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    alignItems: "center",
  },
  label: {
    fontSize: 13,
    color: Colors.textDark,
    opacity: 0.6,
    marginBottom: 4,
  },
  amount: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.primary,
  },
});
