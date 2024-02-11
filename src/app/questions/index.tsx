import QuestionCard from "@components/QuestionCard";
import { Input, makeStyles } from "@rneui/themed";
import { useQuestionStore } from "@stores/questionStore";
import { useState } from "react";
import { ScrollView, View } from "react-native";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 40,
  },
  title: {
    margin: "auto",
  },
  input: {
    color: theme.colors.white,
  },
  inputContainer: {
    width: "75%",
  },
}));

const Questions = () => {
  const styles = useStyles();
  const questions = useQuestionStore((state) => state.questions);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
        {questions
          .filter((question) =>
            question.question.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map((question) => (
            <QuestionCard key={question.question} question={question} />
          ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Search"
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Questions;
