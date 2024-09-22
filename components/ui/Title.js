import { Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.primary800,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary100,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    padding: 12,
    marginVertical: 16,
    elevation: 2,
  },
});
