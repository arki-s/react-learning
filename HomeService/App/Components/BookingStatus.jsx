import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";

export default function BookingStatus({ bookingStatus }) {
  const status = JSON.parse(JSON.stringify({ bookingStatus })).bookingStatus;

  switch (status) {
    case "Booked":
      return <Text style={styles.booked}>Booked</Text>;
    case "Completed":
      return <Text style={styles.completed}>Completed</Text>;
    case "Canceled":
      return <Text style={styles.canceled}>Canceled</Text>;
    default:
      return;
  }
}

const styles = StyleSheet.create({
  booked: {
    fontFamily: "outfit",
    alignSelf: "flex-start",
    padding: 5,
    backgroundColor: Colors.PRIMARY_LIGHT,
    color: Colors.PRIMARY,
    borderRadius: 6,
  },
  completed: {
    fontFamily: "outfit",
    alignSelf: "flex-start",
    padding: 5,
    backgroundColor: Colors.GREEN_LIGHT,
    color: Colors.GREEN,
    borderRadius: 6,
  },
  canceled: {
    fontFamily: "outfit",
    alignSelf: "flex-start",
    padding: 5,
    backgroundColor: Colors.RED_LIGHT,
    color: Colors.RED,
    borderRadius: 6,
  },
});
