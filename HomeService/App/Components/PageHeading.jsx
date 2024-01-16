import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function PageHeading({ title }) {
  return (
    <View>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
          {title?.category}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
