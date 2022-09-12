import React from "react";

import { View, Button, Text, TextInput } from "react-native";

function Login({ navigation }) {
  function signHome() {
    navigation.navigate("Home");
  }

  function navigateRegister() {
    navigation.navigate("Register");
  }

  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <View>
        <View>
          <Text>Email</Text>
          <TextInput placeholder="Insira seu email" />
        </View>
        <View>
          <Text>Senha</Text>
          <TextInput placeholder="Insira sua senha" />
        </View>
      </View>

      <View>
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Button title="Login" onPress={() => signHome()} color="black" />
        </View>
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Button
            title="Register"
            onPress={() => navigateRegister()}
            color="black"
          />
        </View>
      </View>
    </View>
  );
}

export default Login;
