import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
const InputWithError = ({ holder, valeur, action, errorMessage, type, isPassword }) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  function showPassword(e) {
    setIsPasswordHidden(false);
  }
  function hidePassword(e) {
    setIsPasswordHidden(true);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer]}>
        <TextInput
          placeholder={holder}
          keyboardType={type}
          secureTextEntry={isPassword && isPasswordHidden}
          onChangeText={action}
          value={valeur}
          style={[styles.input, { outline: "none" }]}
        />
        {isPassword && (
          <TouchableOpacity onPressIn={showPassword} onPressOut={hidePassword}>
            <Feather
              name={isPasswordHidden ? "eye-off" : "eye"}
              size={24}
              color={isPasswordHidden ? "green" : "orange"}
            />
          </TouchableOpacity>
        )}
      </View>

      <Text style={[styles.error]}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(255,255,255)",
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    fontSize: 17,
    padding: 10,
    width: "100%",
  },
  error: {
    color: "red",
  },
});

export default InputWithError;
