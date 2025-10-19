 import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/theme";

export function EmptyState() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>All caught up!</Text>
        <Text style={styles.text}>No upcoming payments at the moment.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 // Center vertically
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: Colors.white,
    paddingVertical: 30,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
    minWidth: 220,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.textDark,
    textAlign: "center",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: Colors.muted,
    textAlign: "center",
    lineHeight: 20,
  },
});
