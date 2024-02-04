import AppHeader from "@components/AppHeader";
import { useDeleteCache, useGetJobs } from "@query/queryClient";
import { makeStyles } from "@rneui/themed";
import { usePostStore } from "@stores/postStore";
import { Slot } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  title: {
    margin: "auto",
  },
}));

const HomeLayout = () => {
  const { mutate } = useDeleteCache();
  useEffect(() => {
    mutate();
  }, []);

  const {
    isLoading: jobLoading,
    error: jobsError,
    data: jobsData,
  } = useGetJobs();
  const postState = usePostStore.getState();
  if (jobsData) {
    postState.addPosts(jobsData);
  }

  const classes = useStyles();

  return (
    <>
      <AppHeader />
      <View style={classes.container}>
        <Slot />
      </View>
    </>
  );
};

export default HomeLayout;
