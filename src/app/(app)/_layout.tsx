import AppHeader from "@components/AppHeader";
import { useGetPostTypes } from "@query/hooks";
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
  const styles = useStyles();
  const { data: typesData } = useGetPostTypes();
  const setTypes = usePostStore((state) => state.setTypes);

  useEffect(() => {
    if (typesData) {
      setTypes(typesData);
    }
  }, [typesData]);

  return (
    <>
      <AppHeader />
      <View style={styles.container}>
        <Slot />
      </View>
    </>
  );
};

export default HomeLayout;
