import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Platform } from "react-native";
import Button from "../../UI/Button/Button";
import P from "../../UI/P/P";
import { AntDesign } from "@expo/vector-icons";
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
    <View accessibilityRole={Platform.OS === "web" ? "form" : null}>
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

      <Button action={login}>
        <AntDesign name='login' size={24} color='whitesmoke' />
        <P white bold>
          Se connecter
        </P>
      </Button>
    </View>
  );
}
//En js:
//null, '', 0, = false
//undefined, 'qsdsqd', 1, 6 = true
