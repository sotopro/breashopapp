import React from "react";
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./styles";

const Auth = () => {
  const title = "REGISTRO";
  const message = "¿Ya tienes una cuenta?";
  const messageAction = "Iniciar sesión";
  const messageTarget = "login";

  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior="height">
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>INPUTS</Text>
      </View>
      <View style={styles.propmt}>
        <Text style={styles.propmtMessage}>{message}</Text>
        <TouchableOpacity onPress={() => console.log(messageTarget)}>
          <Text style={styles.propmtButton}>{messageAction}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
