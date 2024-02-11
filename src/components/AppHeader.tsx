import { Header, Text, makeStyles } from "@rneui/themed";
import { usePostStore } from "@stores/postStore";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: theme.colors.primary,
    justifyContent: "space-around",
    height: 100,
  },
  scrollView: {
    flexGrow: 0,
  },
  option: {
    paddingHorizontal: 10,
  },
  optionText: {
    color: theme.colors.white,
  },
}));

const AppHeader = () => {
  const styles = useStyles();
  const { setType, types } = usePostStore((state) => state);

  const handlePostTypeSelect = (type: string) => {
    setType(type);
  };

  return (
    <Header
      centerComponent={
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          {types.map((type, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePostTypeSelect(type)}
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

export default AppHeader;
