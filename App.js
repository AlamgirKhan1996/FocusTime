import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";
import { colors } from "./src/utils/colors";

export default function App() {
  const [currentSubject, setcurrentSubject] = useState(null);
  return (
    <View style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setcurrentSubject} />
      ) : (
        <Timer focusSubject={currentSubject} />
      )}
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
