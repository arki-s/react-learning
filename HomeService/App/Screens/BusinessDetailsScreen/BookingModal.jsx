import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";

export default function BookingModal({ hideModal }) {
  const [timeList, setTimeList] = useState();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({ time: i + ":00 AM" });
      timeList.push({ time: i + ":30 AM" });
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({ time: i + ":00 PM" });
      timeList.push({ time: i + ":30 PM" });
    }
    setTimeList(timeList);
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginBottom: 20,
        }}
        onPress={() => hideModal()}
      >
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
          Booking
        </Text>
      </TouchableOpacity>
      {/* calendar section */}
      <Heading text={"Select Date"} />
      <View style={styles.calendarContainer}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          width={340}
          minDate={Date.now()}
          todayBackgroundColor={Colors.BLACK}
          todayTextStyle={{ color: Colors.WHITE }}
          selectedDayColor={Colors.PRIMARY}
          selectedDayTextColor={Colors.WHITE}
        />
      </View>
      {/* Time Select Section */}
      <View>
        <FlatList
          data={timeList}
          renderItem={({ item, index }) => {
            <TouchableOpacity>
              <Text>{item.time}</Text>
            </TouchableOpacity>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: Colors.PRIMARY_LIGHT,
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 15,
  },
});
