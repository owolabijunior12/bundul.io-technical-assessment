import { Colors } from '@/constants/theme';
import { formatCurrency } from '@/utils';
import { MotiView } from 'moti';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

type Payment = {
  id: number;
  service: string;
  amount: number;
  dueDate: string;
  iconLib?: any; 
  iconName?: string; 
};

export const PaymentCard = ({
  payment,
  onPayNow,
  onPayLater,  
}: {
  payment: Payment;
  onPayNow: (payment: Payment) => void;
  onPayLater: (payment: Payment) => void;
}) => {
  const dueDate = new Date(payment.dueDate);
  const now = new Date();

  now.setHours(0, 0, 0, 0);
  dueDate.setHours(0, 0, 0, 0);

  const diffTime = dueDate.getTime() - now.getTime();
  const daysLeft = Math.round(diffTime / (1000 * 60 * 60 * 24));
  const isDueSoon = daysLeft <= 3;
  const backgroundColor = Colors.white;

  let dueText = '';
  if (daysLeft < 0) {
    dueText = `Due ${Math.abs(daysLeft)} day${Math.abs(daysLeft) > 1 ? 's' : ''} ago`;
  } else if (daysLeft === 0) {
    dueText = 'Due Today';
  } else if (daysLeft <= 3) {
    dueText = `Due in ${daysLeft} day${daysLeft > 1 ? 's' : ''}`;
  } else {
    dueText = `Due: ${dueDate.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })}`;
  }

   const getServiceIcon = (service: string) => {
    switch (service.toLowerCase()) {
      case "spotify": return <FontAwesome5 name="spotify" size={28} color="#1DB954" />;
      case "microsoft 365": return <MaterialCommunityIcons name="microsoft" size={28} color="#F25022" />;
      case "amazon prime": return <FontAwesome5 name="amazon" size={28} color="#00A8E1" />;
      case "figma professional": return <FontAwesome5 name="figma" size={26} color="#F24E1E" />;
      case "chatgpt plus": return <FontAwesome5 name="robot" size={26} color="#10A37F" />;
      case "youtube premium": return <FontAwesome5 name="youtube" size={26} color="#FF0000" />;
      case "canva pro": return <FontAwesome5 name="paint-brush" size={26} color="#00C4CC" />;
      case "zoom pro": return <FontAwesome5 name="video" size={26} color="#2D8CFF" />;
      case "slack premium": return <FontAwesome5 name="slack" size={26} color="#4A154B" />;
      case "dropbox plus": return <FontAwesome5 name="dropbox" size={26} color="#0061FF" />;
      case "disney+": return <FontAwesome5 name="film" size={26} color="#113CCF" />;
      case "coursera plus": return <FontAwesome5 name="graduation-cap" size={26} color="#2A73CC" />;
      case "github pro": return <FontAwesome5 name="github" size={26} color="#000" />;
      default: return <Feather name="credit-card" size={26} color={Colors.muted} />;
    }
  }
  return (
    <MotiView
      from={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 350 }}
      style={[styles.card, { backgroundColor }]}
    >
       <View style={styles.left}>
        <View style={styles.iconContainer}>{getServiceIcon(payment.service)}</View>
        <View>
          <Text style={styles.service}>{payment.service}</Text>
          <Text style={styles.date}>
            Due:{" "}
            {dueDate.toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.amount}>{formatCurrency(payment.amount)}</Text>

        {isDueSoon && (
          <MotiView
            from={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ loop: true, type: 'timing', duration: 100 }}
            style={styles.badge}
          >
            <Text style={styles.badgeText}>{dueText}</Text>
          </MotiView>
        )}

        <View style={styles.actions}>
          <Pressable style={styles.payNow} onPress={() => onPayNow(payment)}>
            <Text style={styles.payNowText}>Pay Now</Text>
          </Pressable>
          <Pressable style={styles.payLater} onPress={() => onPayLater(payment)}>
            <Text style={styles.payLaterText}>Later</Text>
          </Pressable>
        </View>
      </View>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  left: { flexDirection: 'row', alignItems: 'center' },
  service: { fontSize: 16, fontWeight: '600', color: Colors.textDark },
  date: { fontSize: 12, color: Colors.muted, marginTop: 4 },
  right: { alignItems: 'flex-end' },
  amount: { fontSize: 16, fontWeight: '700', color: Colors.primary },
  badge: { marginTop: 6, backgroundColor: Colors.danger, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10 },
  badgeText: { color: Colors.white, fontSize: 12, fontWeight: '700' },
  actions: { flexDirection: 'row', marginTop: 8 },
  payNow: { backgroundColor: Colors.primary, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8 },
  payNowText: { color: Colors.white, fontWeight: '700' },
  payLater: { marginLeft: 8, borderRadius: 8, borderWidth: 1, borderColor: Colors.primary, paddingHorizontal: 12, paddingVertical: 8 },
  payLaterText: { color: Colors.primary, fontWeight: '700' },
});

 