import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Profil from "./Components/Pages/Profil/Profil";
import Auth from "./Components/Pages/Auth/Auth";
import { UserContext } from "./Contexts/UserContext";
import ProfilStack from "./Components/Stacks/ProfilStack";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const fakeUser = { email: "sam.djm93@gmail.com", username: "Samy" };
  const [user, setUser] = useState(fakeUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <View style={styles.container}>
          {user ? <ProfilStack /> : <Auth />}

          <StatusBar style='auto' />
        </View>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontWeight: "bold",
  },
});
//HOC: HIGH ORDER COMPONENT.
