import { Card, Image } from "@rneui/themed";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

import { Post } from "../types/types";

export const PostComponent = ({ post }: { post: Post }) => {
  const formatedDate = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.timestamp));
  return (
    <Card>
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
      {}
      <Text style={styles.timestamp}>Posted on: {formatedDate}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
    color: "#bdbcd6",
  },
  timestamp: {
    fontSize: 12,
    color: "#79798c",
  },
});
