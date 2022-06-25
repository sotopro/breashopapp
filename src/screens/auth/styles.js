import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/index";

export const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    maxWidth: 400,
    padding: 12,
    margin: 12,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 18,
    fontFamily: "Lato-Bold",
    marginBottom: 12,
    textAlign: "center",
  },
  prompt: {
    alignItems: "center",
  },
  promptMessage: {
    fontSize: 14,
    fontFamily: "Lato-Regular",
    color: colors.text,
  },
  propmtButton: {
    fontSize: 14,
    fontFamily: "Lato-Bold",
    color: colors.primary,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.primary,
    marginVertical: 20,
  },
});
