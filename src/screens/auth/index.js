import React, { useState, useReducer } from "react";
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
import { UPDATED_FORM, onInputChange, onFocusOut } from "../../utils/forms";

const initialState = {
  email: { value: "", touched: false, hasError: true, error: "" },
  password: { value: "", touched: false, hasError: true, error: "" },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
      };
    default:
      return state;
  }
};

const Auth = () => {
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [isLogin, setIsLogin] = useState(true);
  const title = isLogin ? "Login" : "Register";
  const message = isLogin
    ? "Don't you have an account?"
    : "Do you have an account?";
  const messageAction = isLogin ? "Sign up" : "Sign in";
  const messageTarget = isLogin ? "register" : "login";
  const buttonText = isLogin ? "Sign in" : "Sign up";

  const onChangeText = (text, type) => {
    onInputChange(type, text, dispatchFormState, formState);
  };

  const onBlurInput = (text, type) => {
    console.log(text);
    onFocusOut(type, text, dispatchFormState, formState);
  };

  const handlerSubmit = () => {
    dispatch(isLogin ? signin(email, password) : signup(email, password));
  };

  const onChangeAuth = () => {
    setPassword("");
    setEmail("");
    setIsLogin(!isLogin);
  };

  console.log({ formState });

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
          value={formState.email.value}
          onChangeText={(text) => onChangeText(text, "email")}
          onBlur={(text) => onBlurInput(text.nativeEvent.text, "email")}
          hasError={formState.email.hasError}
          error={formState.email.error}
          touched={formState.email.touched}
        />
        <Input
          style={styles.input}
          label="Password"
          placeholder="Password"
          placeholderTextColor={colors.gray}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          value={formState.password.value}
          onChangeText={(text) => onChangeText(text, "password")}
          onBlur={(text) => onBlurInput(text.nativeEvent.text, "password")}
          hasError={formState.password.hasError}
          error={formState.password.error}
          touched={formState.password.touched}
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
