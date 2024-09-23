import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../utils/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.white,
    textAlign: "center",
    borderWidth: Platform.OS === "ios" ? 1 : 0,
    borderColor: Colors.accent800,
    backgroundColor: Colors.accent800,
    borderRadius: 4,
    padding: 12,
    marginVertical: 16,
    elevation: 2,
    maxWidth: "80%",
  },
});
