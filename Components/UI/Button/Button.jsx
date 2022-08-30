import { StyleSheet, TouchableOpacity } from "react-native";

export default function Button({ action, children }) {
  return (
    <TouchableOpacity style={[styles.button]} onPress={action}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "royalblue",
    padding: 10,
    alignSelf: "center",
    borderRadius: 5,
    margin: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
