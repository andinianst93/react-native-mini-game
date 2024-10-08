import { Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: "open-sans",
  },
});
