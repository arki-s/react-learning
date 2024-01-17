import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
// import { useUser } from "@clerk/clerk-expo";

export default function ProfileScreen() {
  // const { user } = useUser();

  const profileMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home",
    },
    {
      id: 2,
      name: "My Booking",
      icon: "bookmark-sharp",
    },
    {
      id: 3,
      name: "Contact Us",
      icon: "mail",
    },
    {
      id: 4,
      name: "Logout",
      icon: "log-out",
    },
  ];
  return (
    <View>
      <View
        style={{ padding: 20, paddingTop: 30, backgroundColor: Colors.PRIMARY }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            color: Colors.WHITE,
          }}
        >
          Profile
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          {/* <Image source={{uri:user.imaegUrl}} style={{width:90,height:90,borderRadius:99}}/> */}
          <Image
            source={require("../../../assets/images/user.png")}
            style={{ width: 90, height: 90, borderRadius: 99 }}
          />
          {/* <Text>{user.fullName}</Text> */}
          <Text
            style={{
              fontSize: 26,
              marginTop: 8,
              fontFamily: "outfit-medium",
              color: Colors.WHITE,
            }}
          >
            Rika Saito
          </Text>
          {/* <Text>{user?.primaryEmailAddress.emailAddress}</Text> */}
          <Text
            style={{
              fontSize: 18,
              marginTop: 8,
              fontFamily: "outfit-medium",
              color: Colors.WHITE,
            }}
          >
            rika@example.com
          </Text>
        </View>
      </View>
      <View style={{ paddingTop: 60 }}>
        <FlatList
          data={profileMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 80,
                marginBottom: 40,
              }}
            >
              <Ionicons name={item.icon} size={44} color={Colors.PRIMARY} />
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 20,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
