import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Header from "./Header";
import { useRouter } from "expo-router";
import { useState } from "react";
export default function ModalScreen() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userData, setuserData] = useState();

  const onSubmit = (e) => {
    console.log("email", email);
    console.log("password", password);
    console.log("User data", userData);
    setuserData({ email: email, password: password });
    setEmail();
    setPassword();
  };

  return (
    <View>
      <Header />
      <View style={styles.cantainer}>
        <Text style={styles.mainText}> Welcome To Captain Login</Text>
      </View>

      <View style={styles.cantainer}>
        <Text style={styles.Text}>What's your Email</Text>
        <TextInput
          value={email}
          onChangeText={(e) => setEmail(e)}
          style={styles.input}
          placeholder="Enter your Email"
        ></TextInput>
        <Text style={styles.Text}>What's your Password</Text>
        <TextInput
          value={password}
          onChangeText={(e) => setPassword(e)}
          style={styles.input}
          placeholder="Enter Password"
        ></TextInput>
      </View>
      <View style={styles.cantainer}>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buText}> Login </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text style={styles.touch}>New here? </Text>

        <TouchableOpacity onPress={() => router.push("/(pages)/CaptainSignup")}>
          <Text
            style={{
              paddingTop: 20,
              fontWeight: 90,
              fontSize: 13,
              color: "blue",
            }}
          >
            Create New Account as a Driver
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cantainer}>
        <TouchableOpacity
          onPress={() => router.push("/(pages)/UserLogin")}
          style={{
            alignContent: "center",
            justifyContent: "center",
            marginTop: 10,
            width: 200,
            borderRadius: 50,
            backgroundColor: "#000000",
            padding: 10,
            backgroundColor: "#77ca1d",
          }}
        >
          <Text style={styles.buText}> Signin As User </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cantainer: {
    marginTop: "20",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 16,
    backgroundColor: "#eeeeee",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    alignItems: "center",
  },
  Text: {
    paddingTop: 20,
    paddingBottom: 10,
    fontWeight: 90,
    fontSize: 20,
  },
  touch: {
    paddingTop: 20,
    fontWeight: 90,
    fontSize: 13,
  },
  mainText: {
    fontSize: 25,
    fontWeight: 500,
  },
  button: {
    alignContent: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 200,
    borderRadius: 50,
    backgroundColor: "#000000",
    padding: 10,
  },
  buText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
  },
});
