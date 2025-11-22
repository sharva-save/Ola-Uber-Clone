import React, { Component, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Header from "./Header";
import { useRouter } from "expo-router";
import axios from "axios";

export default function UserLogin() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userData, setUserData] = useState();

  const onSubmit = (e) => {
    setUserData({ email: email, password: password });
    console.log("email", email);
    console.log("password", password);
    console.log(userData);
    setEmail("");
    setPassword("");

    const response = axios
      .post("http://192.168.7.4:3000/user/login", userData)
      .then((e) => {
        console.log("data get successfully" ,e);
      })
      .catch((e) => {
        console.log("error", e);
      });
      console.log(response);
      Alert.alert("Login Successfully")
      
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View>
          <Text style={styles.mainText}>Welcome</Text>
        </View>

        {/* Replaced container with formContainer */}
        <View style={styles.formContainer}>
          <Text>What's your email</Text>
          <TextInput
            type="email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            style={styles.input}
          />

          <Text>What's your Password</Text>
          <TextInput
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your Password"
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <Text>New here?</Text>

        <TouchableOpacity onPress={() => router.push("/(pages)/UserSignup")}>
          <Text style={{ fontSize: 13, color: "blue" }}>
            Create New Account
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => router.push("/(pages)/CaptainLogin")}
          style={styles.button2}
        >
          <Text style={styles.login}> Signin As Captain</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  mainText: {
    fontSize: 25,
    fontWeight: 500,
  },
  input: {
    fontSize: 16,
    backgroundColor: "#eeeeee",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#000000",
    width: 200,
    borderRadius: 50,
    padding: 10,
  },
  button2: {
    backgroundColor: "#2b7fff",
    borderRadius: 50,
    alignItems: "center",
    alignContent: "center",
    padding: 20,
    marginTop: 20,
  },
  login: {
    color: "#ffffff",
    alignContent: "center",
    textAlign: "center",
    fontSize: 20,
  },
});
