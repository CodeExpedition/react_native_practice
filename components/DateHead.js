import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function DateHead({ date }) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatted = `${year}년 ${month}월 ${day}일`;
  const { top } = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.staytusBarPlaceholder, { height: top }]} />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
}

export default DateHead;

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: "#26a69a",
  },
  dateText: {
    fontSize: 24,
    color: "white",
  },
  staytusBarPlaceholder: {
    backgroundColor: "#26a69a",
  },
});
