import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessListItemSmall from "../BusinessListByCategory/BusinessListItemSmall";
import { useNavigation } from "@react-navigation/native";
// import { useUser } from "@clerk/clerk-expo";

export default function BookingScreen() {
  // const { user } = useUser();
  const [bookingList, setBookingList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    getUserBookings();
  }, []);

  const getUserBookings = () => {
    setLoading(true);
    // GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then((resp) => {
    GlobalApi.getUserBookings("rika@example.com").then((resp) => {
      // console.log(resp);
      setBookingList(resp.bookings);
      setLoading(false);
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontFamily: "outfit-medium", fontSize: 26 }}>
        My Bookings
      </Text>
      <View>
        <FlatList
          data={bookingList}
          onRefresh={() => getUserBookings}
          refreshing={loading}
          renderItem={({ item, index }) => (
            <BusinessListItemSmall
              business={item?.businessList}
              booking={item}
            />
          )}
        />
      </View>
    </View>
  );
}
