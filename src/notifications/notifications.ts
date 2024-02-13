import * as Notifications from "expo-notifications";

import { Post } from "../types/Post";

export async function schedulePushNotification(post: Post) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: post.title,
      body: post.description ?? "No description given.",
      data: { post },
    },
    trigger: { seconds: 3 },
  });
}
