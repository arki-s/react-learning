import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import BusinessPhotos from "./BusinessPhotos";
import BusinessAboutMe from "./BusinessAboutMe";

export default function BusinessDetailsScreen() {
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);

  const navigation = useNavigation();

  useEffect(() => {
    console.log(param?.business);
  }, []);

  return (
    business && (
      <ScrollView>
        <TouchableOpacity
          style={styles.backBtnContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Image
          source={{ uri: business?.images[0].url }}
          style={{ width: "100%", height: 300 }}
        />
        <View style={styles.infoContainer}>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
            {business?.name}
          </Text>
          <View style={styles.subContainer}>
            <Text
              style={{
                fontFamily: "outfit-medium",
                color: Colors.PRIMARY,
                fontSize: 20,
              }}
            >
              {business?.contactPerson} 🌟{" "}
            </Text>
            <Text
              style={{
                color: Colors.PRIMARY,
                backgroundColor: Colors.PRIMARY_LIGHT,
                padding: 5,
                borderRadius: 5,
                fontSize: 14,
              }}
            >
              {business?.category.name}
            </Text>
          </View>
          <Text
            style={{ fontSize: 17, fontFamily: "outfit", color: Colors.GRAY }}
          >
            <Ionicons
              name="location-sharp"
              size={20}
              color={Colors.PRIMARY}
              style={{ marginRight: 10 }}
            />
            {business?.address}
          </Text>

          {/* horizontal line */}
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.GRAY,
              marginTop: 20,
              marginBottom: 20,
            }}
          ></View>

          <BusinessAboutMe business={business} />

          {/* horizontal line */}
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.GRAY,
              marginTop: 20,
              marginBottom: 20,
            }}
          ></View>
          <BusinessPhotos business={business} />
        </View>
      </ScrollView>
    )
  );
}

const styles = StyleSheet.create({
  backBtnContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 30,
  },
  infoContainer: {
    padding: 20,
    display: "flex",
    gap: 7,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});
