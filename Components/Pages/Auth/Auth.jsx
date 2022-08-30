import { Text, View } from "react-native";
import Card from "../../HOC/Card/Card";

export default function Auth() {
  return (
    <View>
      <Card title='Bienvenue!' content='Veuillez vous authentifier!'>
        <Text style={{ color: "red" }}>Un composant potentiel</Text>
        <Text>Un autre composant potentiel</Text>
      </Card>
    </View>
  );
}
