import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.title}>We havn't focused on anythings yet :</Text>
    );
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thing's We Focus on :</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.sm,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.lg,
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: spacing.md,
    padding: spacing.lg,
  },
});
