import { CameraType, Camera } from "expo-camera";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
const Cam = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const size = useWindowDimensions();
  if (!permission) {
    requestPermission();
  }
  if (permission && permission.status == "undetermined") {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={100} color='green' />
      </View>
    );
  }
  if (permission && !permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Permission refusée</Text>
        <Feather name='camera-off' size={100} color='red' />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera type={type} ratio='1:1' style={{ height: size.width, width: size.width }}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <MaterialIcons name='flip-camera-android' size={50} color='green' />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name='camera' size={50} color='red' />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "red",
  },
  iconsContainer: {
    backgroundColor: "rgba(10,10,10,.3)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    position: "absolute",
    bottom: 50,
    width: "75%",
    alignSelf: "center",
    borderRadius: 5,
  },
});

export default Cam;
