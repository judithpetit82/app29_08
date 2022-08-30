import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
  //les variables d'états:
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //Les fonctions handle:
  function handleEmail(text) {
    setEmailInput(text);
    setEmailError("");
  }
  function handlePassword(text) {
    setPasswordInput(text);
    setPasswordError("");
  }

  //Fonction de validation
  function login() {
    if (emailInput.includes("@") && passwordInput.length >= 6) {
      console.log(emailInput + ", connexion réussie!");
    } else {
      setEmailError(!emailInput.includes("@") ? "Email invalide!" : "");
      setPasswordError(passwordInput.length < 6 ? "Mot de passe trop court!" : "");
    }
  }

  return (
    <View accessibilityRole='form'>
      <TextInput
        placeholder='Email'
        keyboardType='email-address'
        onChangeText={handleEmail}
      />
      <Text>{emailError}</Text>
      <TextInput
        placeholder='Mot de passe'
        secureTextEntry
        onChangeText={handlePassword}
      />
      <Text>{passwordError}</Text>
      <TouchableOpacity onPress={login}>
        <Text>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}
