import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.primary700,
    backgroundColor: Colors.primary700,
    padding: 24,
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  text: {
    fontSize: 42,
    color: Colors.white,
    fontFamily: "open-sans-bold",
  },
});
