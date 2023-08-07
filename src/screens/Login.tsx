import { StyleSheet, View } from "react-native";

export default function Login() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "#f8fafc",
    display: "flex",
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});
