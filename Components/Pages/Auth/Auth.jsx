import { StyleSheet, Text, View } from "react-native";
import Card from "../../HOC/Card/Card";

export default function Auth() {
  return (
    <View style={styles.container}>
      <Card title='Bienvenue!' content='Veuillez vous authentifier!'>
        <Text style={{ color: "red" }}>Un composant potentiel</Text>
        <Text>Un autre composant potentiel</Text>
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
