import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";
import { useState } from "react";

export default function BusinessAboutMe({ business }) {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    business && (
      <View>
        <Heading text={"About Me"} />
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.GRAY,
            fontSize: 16,
            lineHeight: 28,
          }}
          numberOfLines={isReadMore ? 20 : 5}
        >
          {business.about}
        </Text>
        <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontSize: 16,
              fontFamily: "outfit",
            }}
          >
            {isReadMore ? "Read Less" : "Read More"}
          </Text>
        </TouchableOpacity>
      </View>
    )
  );
}
