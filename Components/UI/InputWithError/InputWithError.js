import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const InputWithError = ({ holder, valeur, action, errorMessage, type, isPassword }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={holder}
        keyboardType={type}
        secureTextEntry={isPassword}
        onChangeText={action}
        value={valeur}
      />
      <Text>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default InputWithError;
