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
    fontSize: 16,
    fontFamily: "Lato-Bold",
    marginBottom: 12,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontFamily: "Lato-Bold",
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: "Lato-Regular",
  },
  prompt: {
    paddingVertical: 20,
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
    marginTop: 20,
  },
});
