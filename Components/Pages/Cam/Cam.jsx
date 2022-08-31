import { View, Text, StyleSheet } from "react-native";

const Cam = () => {
  return (
    <View style={styles.container}>
      <Text>Cam</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

export default Cam;
