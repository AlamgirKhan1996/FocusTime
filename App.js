import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Focus } from "./src/features/Focus";
import { colors } from "./src/utils/colors";

export default function App() {
  const [currentSubject, setcurrentSubject] = useState(null);
  return (
    <View style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setcurrentSubject} />
      ) : (
        <View>
          <Text style={{ color: colors.white }}>
            now i am set the timer for {currentSubject}
          </Text>
        </View>
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
