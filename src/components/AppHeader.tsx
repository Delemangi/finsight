import { Header, Text } from "@rneui/themed";
import React from "react";
import { ScrollView, TouchableOpacity, View, StyleSheet } from "react-native";

import { POST_TYPES } from "../config/consants";

const handleOptionSelect = (option: string) => {
  console.log(`Selected option: ${option}`);
  // Add your logic for handling option selection here
};

// TODO: Fix a bug where header horizontall scroll scrolls the entire page
const AppHeader = () => {
  return (
    <Header
      centerComponent={
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          {POST_TYPES.map((type, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionSelect(type)}
              style={styles.option}
            >
              <Text style={styles.optionText}>{type.toUpperCase()}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      }
      containerStyle={styles.headerContainer}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#3D6DCC",
    justifyContent: "space-around",
    height: 100, // Adjust the height as needed
  },
  scrollView: {
    flexGrow: 0,
  },
  option: {
    paddingHorizontal: 10,
  },
  optionText: {
    color: "#fff",
  },
});

export default AppHeader;
