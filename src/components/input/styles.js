import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: "Lato-Regular",
  },
  message: {
    paddingVertical: 5,
  },
  helperText: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: colors.error,
  },
});
