import { View, StyleSheet, Text } from "react-native";
import Colors from "../../utils/colors";

export default function GuessLog({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.roundNumber}>#{roundNumber}</Text>
      <Text style={styles.roundNumber}>Opponent's guess {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
  },

  roundNumber: {
    fontFamily: "open-sans",
    fontSize: 16,
  },
});
