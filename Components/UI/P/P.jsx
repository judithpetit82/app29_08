import { StyleSheet, Text } from "react-native";

export default function P({ white, bold, outline, children }) {
  return (
    <Text
      style={[
        {
          color: white ? "whitesmoke" : "black",
          fontWeight: bold ? "bold" : null,
          borderBottomWidth: outline ? 1 : 0,
          borderColor: white ? "whitesmoke" : "black",
        },
        styles.text,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 7,
    fontSize: 15,
  },
});
