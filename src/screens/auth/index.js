import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../../constants/themes";
import { styles } from "./styles";
import { signup, signin } from "../../store/actions/index";
import { Input } from "../../components";

const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const title = isLogin ? "Login" : "Register";
  const message = isLogin
    ? "Don't you have an account?"
    : "Do you have an account?";
  const messageAction = isLogin ? "Sign up" : "Sign in";
  const messageTarget = isLogin ? "register" : "login";
  const buttonText = isLogin ? "Sign in" : "Sign up";

  const onChangeText = (text, type) => {
    if (type === "email") {
      setEmail(text);
    } else {
      setPassword(text);
    }
  };

  const handlerSubmit = () => {
    dispatch(isLogin ? signin(email, password) : signup(email, password));
  };

  const onChangeAuth = () => {
    setPassword("");
    setEmail("");
    setIsLogin(!isLogin);
  };

  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior="height">
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Input
          style={styles.input}
          label="Email"
          placeholder="Email address"
          placeholderTextColor={colors.gray}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => onChangeText(text, "email")}
        />
        <Input
          style={styles.input}
          label="Password"
          placeholder="Password"
          placeholderTextColor={colors.gray}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(text) => onChangeText(text, "password")}
        />
        <View style={styles.button}>
          <Button
            color={colors.primary}
            title={buttonText}
            onPress={() => handlerSubmit()}
          />
        </View>
        <View style={styles.prompt}>
          <Text style={styles.propmtMessage}>{message}</Text>
          <TouchableOpacity onPress={() => onChangeAuth()}>
            <Text style={styles.propmtButton}>{messageAction}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
