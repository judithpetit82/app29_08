import { View, Text, Platform } from "react-native";
import InputWithError from "../../UI/InputWithError/InputWithError";
import Button from "../../UI/Button/Button";
import P from "../../UI/P/P";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { UserContext } from "../../../Contexts/UserContext";
export default function Signup() {
  const { user, setUser } = useContext(UserContext);

  //les variables d'états:
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [usernameInput, setUsernameInput] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  //Les fonctions handle:
  function handleEmail(text) {
    setEmailInput(text);
    setEmailError("");
  }

  function handleUsername(text) {
    setUsernameInput(text);
    setUsernameError("");
  }
  function handlePassword(text) {
    setPasswordInput(text);
    setPasswordError("");
  }

  function handleConfirmPassword(text) {
    setConfirmPasswordInput(text);
    setConfirmPasswordError("");
  }

  //Fonction de validation
  function signup() {
    if (
      emailInput.includes("@") &&
      passwordInput.length >= 6 &&
      usernameInput.length >= 3 &&
      usernameInput.length <= 12 &&
      confirmPasswordInput === passwordInput
    ) {
      //Todo: envoyer les infos a la backend
      setUser({ email: emailInput, username: usernameInput });
    } else {
      setEmailError(!emailInput.includes("@") ? "Email invalide!" : "");
      setUsernameError(
        usernameInput.length < 3
          ? "Username trop court!"
          : usernameInput.length > 12
          ? "Username trop long!"
          : ""
      );
      setPasswordError(passwordInput.length < 6 ? "Mot de passe trop court!" : "");
      setConfirmPasswordError(
        confirmPasswordInput !== passwordInput ? "Les mots de passe sont differents" : ""
      );
      setPasswordInput("");
      setConfirmPasswordInput("");
    }
  }

  return (
    <View accessibilityRole={Platform.OS === "web" ? "form" : null}>
      <InputWithError
        holder='Email'
        valeur={emailInput}
        action={handleEmail}
        errorMessage={emailError}
        type='email-address'
      />

      <InputWithError
        holder='Pseudo'
        valeur={usernameInput}
        action={handleUsername}
        errorMessage={usernameError}
        type='default'
      />

      <InputWithError
        holder='Mot de passe'
        valeur={passwordInput}
        action={handlePassword}
        errorMessage={passwordError}
        type='default'
        isPassword
      />
      <InputWithError
        holder='Confirmez votre Mot de passe'
        valeur={confirmPasswordInput}
        action={handleConfirmPassword}
        errorMessage={confirmPasswordError}
        type='default'
        isPassword
      />

      <Button action={signup}>
        <AntDesign name='login' size={24} color='whitesmoke' />
        <P white bold>
          S'inscrire
        </P>
      </Button>
    </View>
  );
}
