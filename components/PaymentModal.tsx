 import React, { useEffect, useRef } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { Colors } from "@/constants/theme";

interface PaymentModalProps {
  visible: boolean;
  type: "success" | "later";  
  serviceName?: string;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  visible,
  type,
  serviceName,
  onClose,
}) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;  
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
          friction: 7,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  const title =
    type === "success"
      ? "Payment Successful"
      : "Payment Delayed";

  const message =
    type === "success"
      ? `Your payment for ${serviceName} has been completed successfully.`
      : `You’ve chosen to pay ${serviceName} later. We’ll remind you again soon.`;

  const btnColor = type === "success" ? Colors.primary : Colors.danger;

  return (
    <Modal visible={visible} transparent animationType="none">
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.modal,
            {
              transform: [{ scale: scaleAnim }],
              opacity: opacityAnim,
            },
          ]}
        >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: btnColor }]}
            onPress={onClose}
          >
            <Text style={styles.btnText}>Close</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    backgroundColor: Colors.white,
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    width: "85%",
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.textDark,
    marginBottom: 8,
    textAlign: "center",
  },
  message: {
    fontSize: 15,
    textAlign: "center",
    color: Colors.muted,
    marginBottom: 16,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 8,
  },
  btnText: {
    color: Colors.white,
    fontWeight: "700",
  },
});

export default PaymentModal;
