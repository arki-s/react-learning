import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  //Clerk OAUTH　使う場合は以下を定義
  // const { user, isLoading } = useUser();

  //return user&&(

  return (
    <View style={styles.container}>
      {/* profile section */}
      <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          {/* Clerk OAUTH　使う場合は以下 */}
          {/* <Image source={{ uri: user?.imageUrl }} style={styles.userImage} /> */}

          <Image
            source={require("../../../assets/images/user.png")}
            style={styles.userImage}
          />
          <View>
            <Text style={{ color: Colors.WHITE, fontFamily: "outfit-medium" }}>
              Welcome,
            </Text>
            <Text
              style={{
                color: Colors.WHITE,
                fontSize: 20,
                fontFamily: "outfit",
              }}
            >
              Rika Saito
            </Text>
          </View>

          {/* Clerk OAUTH　使う場合は以下 */}
          {/* <Text>{user?.fullName}</Text> */}
        </View>
        <FontAwesome name="bookmark-o" size={27} color="white" />
      </View>
      {/* search bar section */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Search" style={styles.textInput} />
        <FontAwesome
          name="search"
          size={24}
          color={Colors.PRIMARY}
          style={styles.searchBtn}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
    fontFamily: "outfit-medium",
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  searchBtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});
