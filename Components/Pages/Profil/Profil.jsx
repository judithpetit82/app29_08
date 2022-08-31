import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { UserContext } from "../../../Contexts/UserContext";
import defaultAvatar from "../../../assets/default_avatar.png";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import styles from "./ProfilStyle";
export default function Profil() {
  const { user, setUser } = useContext(UserContext);

  const size = useWindowDimensions();

  async function pickImage() {
    //Utiliser la libraire expo.
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    setUser({ ...user, avatar: image });
  }

  return (
    <View>
      <View style={styles.avatarContainer}>
        <Image
          source={user.avatar ? user.avatar : defaultAvatar}
          style={[
            styles.avatar,
            { width: size.width, height: size.width, maxWidth: 300, maxHeight: 300 },
          ]}
        />
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.icon} onPress={pickImage}>
            <MaterialIcons name='photo-library' size={50} color='black' />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon}>
            <MaterialIcons name='photo-camera' size={50} color='black' />
          </TouchableOpacity>
        </View>
      </View>

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
