import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Colors } from "@/constants/theme";

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.background },
        }}
      />
      <StatusBar style="dark" />
    </View>
  );
}
