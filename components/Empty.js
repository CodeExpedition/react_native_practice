import { View, Text, StyleSheet, Image } from "react-native";

function Empty() {
  return (
    <View style={styles.block}>
      <Image
        source={require("../assets/images/young_and_happy.png")}
        style={styles.image}
        resizeMode="center"
      />
      <Text style={styles.description}>할 일이 없어요!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  description: {
    fontSize: 24,
    color: "#929292",
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
});

export default Empty;
