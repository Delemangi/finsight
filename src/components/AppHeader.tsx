import { useLogoutUser } from "@auth/hooks";
import { Button, Chip, Header, Text, makeStyles } from "@rneui/themed";
import { usePostStore } from "@stores/postStore";
import { useUserStore } from "@stores/userStore";
import React from "react";
import { ScrollView } from "react-native";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: theme.colors.primary,
    justifyContent: "space-around",
    height: 100,
  },
  option: {
    paddingHorizontal: 10,
  },
  optionText: {
    color: theme.colors.white,
  },
  loginText: {
    color: theme.colors.white,
  },
  chip: {
    marginHorizontal: 5,
  },
  selectedChip: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.colors.white,
  },
}));

const AppHeader = () => {
  const styles = useStyles();
  const {
    setType,
    types: postTypes,
    type: selectedType,
  } = usePostStore((state) => state);
  const user = useUserStore((state) => state.user);
  const { logout, loading } = useLogoutUser();

  const handlePostTypeSelect = (type: string) => {
    setType(type);
  };

  return (
    <Header
      leftComponent={
        user ? (
          <Button
            icon={{
              name: "logout",
              type: "material",
              color: "white",
            }}
            onPress={() => {
              logout();
            }}
            loading={Boolean(loading)}
            type="solid"
          />
        ) : undefined
      }
      centerComponent={
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal
        >
          {user ? (
            postTypes.map((postType) => (
              <Chip
                key={postType}
                containerStyle={[
                  styles.chip,
                  selectedType === postType && styles.selectedChip,
                ]}
                title={postType.toUpperCase()}
                type={selectedType === postType ? "outline" : "solid"}
                titleStyle={styles.optionText}
                onPress={() => handlePostTypeSelect(postType)}
                size="md"
              />
            ))
          ) : (
            <Text style={styles.loginText}>Please login to see posts!</Text>
          )}
        </ScrollView>
      }
      containerStyle={styles.headerContainer}
    />
  );
};

export default AppHeader;
