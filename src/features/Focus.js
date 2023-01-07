import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
export const Focus = () => (
  <View style={styles.container}>
    <View style={styles.textinputContainer}>
      <TextInput label="What would you like to focus on?" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinputContainer: {
    flex: 0.2,
    padding: 25,
    justifyContent: "center",
  },
});
