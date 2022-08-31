import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../../../Contexts/UserContext";

export default function Profil() {
  const { user, setUser } = useContext(UserContext);

  return (
    <View>
      <View style={styles.infosContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.info}>{user.email}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Username</Text>
          <Text style={styles.info}>{user.username}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.info}>
            {user.description ? user.description : "Veuillez entrer une déscription"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infosContainer: {
    backgroundColor: "rgb(220,220,220)",
    padding: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "royalblue",
  },
  infoContainer: {
    borderBottomWidth: 1,
    borderColor: "rgb(20,20,20)",
    padding: 5,
  },
  label: {
    fontWeight: "bold",
  },
});
