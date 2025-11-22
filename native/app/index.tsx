import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Header from "./(pages)/Header";

export default function Start() {
  const router = useRouter();
  return (
    <View>
      <Header />
      <Image
        source={{
          uri: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/139875160/original/88288026ab0ad8dd056e82c7bf9aae9a097fe6ed/provide-readymade-ola-uber-taxi-app.png",
        }}
        style={styles.image}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.buttonText}> Get Started with Uber</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(pages)/CaptainLogin")}
        >
          <Text style={styles.buttonText1}> Continue </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 500,
    width: "auto",
    resizeMode: "contain",
  },
  button: {
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 20,
    width: 200,
    borderRadius: 50,
    backgroundColor: "#000000",
    padding: 20,
  },
  buttonText: {
    color: "#000000",
    textAlign: "center",
  },
  buttonText1: {
    color: "#ffffff",
    textAlign: "center",
  },
});
