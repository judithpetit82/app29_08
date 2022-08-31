import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    alignSelf: "center",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "rgba(10, 10, 10, 0.1)",
    maxWidth: 300,
    alignSelf: "center",
    width: "100%",
  },
  infosContainer: {
    backgroundColor: "rgb(220,220,220)",
    padding: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "royalblue",
    maxWidth: 300,
    alignSelf: "center",
    width: "100%",
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

export default styles;
