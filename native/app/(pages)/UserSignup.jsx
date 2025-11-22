import React, { Component, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import Header from "./Header";
import { useRouter } from "expo-router";
import axios from "axios";
 const UserSignup =()=> {
   const router = useRouter();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userData, setuserData] = useState();
  
    const onSubmit = (e) => {
      setEmail(''),
      setName('')
      setPassword('')
      setuserData('')
      console.log(name);
      console.log(email);
      console.log(password);
      setuserData({email:email, name:name, password:password})
      console.log(userData);

      const response = axios
            .post("http://192.168.7.4:3000/user/create", userData)
            .then((res) => {
              console.log("Response:", res);
              return res;
            })
            .catch((error) => {
              console.error("Error:", error);
            });
            console.log(response);
            Alert.alert("Account Created Successfully");
            router.push("/(pages)/UserLogin");
      
    }
  return (
     <View>
          <Header />
          <Text style={styles.mainText}>Welcome</Text>
          <View style={styles.container}>
            <Text style={styles.Text}>What's your Name</Text>
            <TextInput
            type='text'
            value={name}
            onChangeText={(e) => setName(e)}
              style={styles.placeholder}
              placeholder="What's your Name"
            ></TextInput>
    
            <Text style={styles.Text}>What's your email</Text>
            <TextInput
            type='email'
            value={email}
            onChangeText={(e) => setEmail(e)}
              style={styles.placeholder}
              placeholder="What's your email"
            ></TextInput>
    
            <Text style={styles.Text}>What's your Password</Text>
            <TextInput
            secureTextEntry={true}
            value={password}
            onChangeText={(e) => setPassword(e)}
              style={styles.placeholder}
              placeholder="What's your Password"
            ></TextInput>
          </View>
    
          <View>
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
              <Text style={styles.butText}> Create Account </Text>
            </TouchableOpacity>
          </View>
          <View></View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: "20",
            }}
          >
            <Text style={styles.touch}>Already have account? </Text>
    
            <TouchableOpacity onPress={() => router.push("/(pages)/UserLogin")}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 13,
                  color: "blue",
                  marginLeft: 5,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
    
          <Text style={{ textAlign: "center", fontSize: 10, marginTop: 10 }}>
            By continuing, you agree to calls, including by autodialer, WhatsApp, or
            texts from Uber and its affiliates.
          </Text>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    backgroundColor: "#EEEEEE",
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    alignItems: "center",
    borderRadius: 20,
  },
  mainText: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 25,
    fontWeight: 500,
  },
  Text: {
    paddingTop: 20,
    paddingBottom: 10,
    fontWeight: 90,
    fontSize: 20,
  },
  butText: {
    backgroundColor: "#77ca1d",
    width: "75%",
    textAlign: "center",
    fontSize: 15,
    padding: 20,
    color: "#ffffff",
    borderRadius: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  touch: {
    fontWeight: "bold",
    fontSize: 13,
  },
});
export default UserSignup 