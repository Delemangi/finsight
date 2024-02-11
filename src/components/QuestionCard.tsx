import { Button, Card, makeStyles, Text } from "@rneui/themed";
import { Linking, TouchableOpacity, View } from "react-native";

import { Question } from "../types/Question";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#100f38",
    borderRadius: 10,
  },
  question: {
    marginBottom: 10,
    color: theme.colors.grey1,
  },
  title: {
    textDecorationLine: "underline",
  },
}));

type Props = {
  question: Question;
};

const QuestionCard = ({ question }: Props) => {
  const styles = useStyles();

  return (
    <Card containerStyle={styles.card}>
      <Card.Title>{question.question}</Card.Title>
      <Card.Divider />
      <Text style={styles.question}>{question.answer}</Text>
      {question.links && (
        <View>
          <Card.Divider />
          {Object.entries(question.links).map(([name, url]) => (
            <TouchableOpacity key={url} onPress={() => Linking.openURL(url)}>
              <Button
                type="solid"
                size="sm"
                title={name}
                titleStyle={styles.title}
              />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </Card>
  );
};

export default QuestionCard;
