import { PostComponent } from "@components/PostComponent";
import { usePostStore } from "@stores/postStore";
import { useUserStore } from "@stores/userStore";
import { usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";

import Login from "./login";

const App = () => {
  const { user } = useUserStore();
  const route = usePathname();
  const posts = usePostStore((state) => state.posts);
  if (!user && route !== "/login" && route !== "/register") {
    return <Login />;
  }

  return (
    <ScrollView>
      <StatusBar style="auto" />
      {posts.map((post) => (
        <PostComponent key={post.url} post={post} />
      ))}
    </ScrollView>
  );
};

export default App;
