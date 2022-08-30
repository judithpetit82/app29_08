import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Login from "../../Container/Login/Login";
import Signup from "../../Container/Signup/Signup";
import Card from "../../HOC/Card/Card";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  function toggleLogin() {
    setIsLogin(!isLogin);
  }
  //Exercice:
  //Utiliser la variable d'état isLogin pour afficher un texte different:
  //Pas encore membre, inscrivez vous! -> isLogin = true
  //Deja membre? Connectez vous! -> isLogin = false

  return (
    <View style={styles.container}>
      <Card
        title='Bienvenue!'
        content={isLogin ? "Veuillez vous connecter!" : "Veuillez vous inscrire!"}
      >
        {isLogin ? <Login /> : <Signup />}

        <TouchableOpacity>
          <Text onClick={toggleLogin}>
            {isLogin
              ? "Pas encore membre, inscrivez vous !"
              : "Déjà membre ? Connectez-vous !"}
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    maxWidth: 700,
  },
});
