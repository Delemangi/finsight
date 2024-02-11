import { makeStyles } from "@rneui/themed";
import { usePostStore } from "@stores/postStore";
import { useQuestionStore } from "@stores/questionStore";
import { Slot } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

import { useGetPostTypes, useGetQuestions } from "../../api/hooks";

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
  const { data: questionsData } = useGetQuestions();
  const setTypes = usePostStore((state) => state.setTypes);
  const setQuestions = useQuestionStore((state) => state.setQuestions);

  useEffect(() => {
    if (typesData) {
      setTypes(typesData);
    }
  }, [typesData]);

  useEffect(() => {
    if (questionsData) {
      setQuestions(questionsData);
    }
  }, [questionsData]);

  return (
    <>
      <View style={styles.container}>
        <Slot />
      </View>
    </>
  );
};

export default HomeLayout;
