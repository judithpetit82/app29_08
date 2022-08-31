import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Profil from "./Components/Pages/Profil/Profil";
import Auth from "./Components/Pages/Auth/Auth";
import { UserContext } from "./Contexts/UserContext";
export default function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <View style={styles.container}>
        {user ? <Profil /> : <Auth />}

        <StatusBar style='auto' />
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
  },
});
//HOC: HIGH ORDER COMPONENT.
