import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
  //les variables d'états:
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  //Les fonctions handle:
  function handleEmail(text) {
    setEmailInput(text);
  }
  function handlePassword(text) {
    setPasswordInput(text);
  }

  //Fonction de validation
  function login() {
    console.log(emailInput + ", connexion réussie!");
  }

  return (
    <View accessibilityRole='form'>
      <TextInput
        placeholder='Email'
        keyboardType='email-address'
        onChangeText={handleEmail}
      />

      <TextInput
        placeholder='Mot de passe'
        secureTextEntry
        onChangeText={handlePassword}
      />
      <TouchableOpacity onPress={login}>
        <Text>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}
