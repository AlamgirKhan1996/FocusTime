import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";
import { colors } from "./src/utils/colors";
import { FocusHistory } from "./src/features/FocusHistory";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  const [currentSubject, setcurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <>
      <SafeAreaView style={styles.container}>
        {!currentSubject ? (
          <>
            <Focus addSubject={setcurrentSubject} />
            <FocusHistory history={history} />
          </>
        ) : (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={(subject) => {
              setHistory([...history, subject]);
            }}
            clearSubject={() => setcurrentSubject(null)}
          />
        )}
      </SafeAreaView>
      <ExpoStatusBar style="Auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentheight,
    backgroundColor: colors.darkblue,
  },
});
