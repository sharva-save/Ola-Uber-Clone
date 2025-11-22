import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useRouter } from "expo-router";

export default function Header() {
  const router = useRouter()
  return (
    <SafeAreaView style={{ backgroundColor: "#000000" }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {router.back()}}>
          <Text style={styles.arrow}>←</Text>
        </TouchableOpacity>

        <Text style={styles.font}>Uber</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#000000",
  },
  arrow: {
    fontSize: 40,
    fontWeight:40,
    color: "#ffffff",
    marginRight: 20,
  },
  font: {
    color: "#ffffff",
    fontSize: 40,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
