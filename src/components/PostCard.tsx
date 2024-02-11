import { Card, Image, makeStyles } from "@rneui/themed";
import React from "react";
import { Linking, Text, TouchableOpacity } from "react-native";

import { Post } from "../types/Post";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#100f38",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
    color: theme.colors.grey1,
  },
  timestamp: {
    fontSize: 12,
    color: theme.colors.grey2,
  },
}));

const dateTimeFormat = Intl.DateTimeFormat("en-UK", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

type Props = {
  post: Post;
};

export const PostCard = ({ post }: Props) => {
  const styles = useStyles();

  const formattedDate = dateTimeFormat.format(new Date(post.timestamp));

  return (
    <Card containerStyle={styles.card}>
      <TouchableOpacity onPress={() => Linking.openURL(post.url)}>
        {post.thumbnail && (
          <Image
            source={{ uri: post.thumbnail.url }}
            style={styles.image}
            resizeMode="contain"
          />
        )}
        <Card.Title>{post.title}</Card.Title>
      </TouchableOpacity>
      <Card.Divider />
      <Text style={styles.description}>{post.description}</Text>
      <Text style={styles.timestamp}>{formattedDate}</Text>
    </Card>
  );
};
