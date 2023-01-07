import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Focus } from "./src/features/Focus";
import { colors } from "./src/utils/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Focus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? statusbar.currentHeight : 0,
    backgroundColor: colors.darkblue,
  },
});
