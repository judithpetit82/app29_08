import { createStackNavigator } from "@react-navigation/stack";
import Cam from "../Pages/Cam/Cam";
import Profil from "../Pages/Profil/Profil";

const Stack = createStackNavigator();

export default function ProfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='profil' component={Profil} />
      <Stack.Screen name='camera' component={Cam} />
    </Stack.Navigator>
  );
}
