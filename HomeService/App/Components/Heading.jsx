import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Heading({ text, isVieaAll = false }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      {isVieaAll && <Text>View all</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontsize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },
});
