import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../utils/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.primary700,
    backgroundColor: Colors.primary700,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
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
