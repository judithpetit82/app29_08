import { createStackNavigator } from "@react-navigation/stack";
import Cam from "../Pages/Cam/Cam";
import Profil from "../Pages/Profil/Profil";

const Stack = createStackNavigator();

export default function ProfilStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "royalblue",
        },
        headerTitleStyle: {
          color: "whitesmoke",
        },
        headerTintColor: "whitesmoke",
      }}
    >
      <Stack.Screen
        name='camera'
        component={Cam}
        options={{
          title: "Prenez une photo",
        }}
      />
      <Stack.Screen
        name='profil'
        component={Profil}
        options={{
          title: "Votre page de profil",
        }}
      />
    </Stack.Navigator>
  );
}
