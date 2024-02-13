import NotificationCheckBox from "@components/NotificationCheckBox";
import { Text, makeStyles } from "@rneui/themed";
import { usePostStore } from "@stores/postStore";
import React from "react";
import { ScrollView, View } from "react-native";

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: "center",
    padding: 10,
    color: theme.colors.white,
  },
  container: {
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: theme.colors.background,
  },
}));

const Notifications = () => {
  const styles = useStyles();
  const { types: postTypes } = usePostStore((state) => state);

  return (
    <View style={styles.container}>
      <Text h3 style={styles.text}>
        Which notifications would you like to receive?
      </Text>
      <ScrollView>
        {postTypes.map((postType) => (
          <NotificationCheckBox key={postType} postType={postType} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Notifications;
