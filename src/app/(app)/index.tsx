import { isRouteAuthenticated } from "@auth/routes";
import { PostCard } from "@components/PostCard";
import { useGetPosts } from "@query/hooks";
import { usePostStore } from "@stores/postStore";
import { useUserStore } from "@stores/userStore";
import { usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";

import Login from "./login";

const App = () => {
  const { user } = useUserStore();
  const route = usePathname();
  const postsType = usePostStore((state) => state.type);
  const { data } = useGetPosts(postsType);

  if (!user && isRouteAuthenticated(route)) {
    return <Login />;
  }

  return (
    <ScrollView>
      <StatusBar style="auto" />
      {data?.map((post) => <PostCard key={post.url} post={post} />)}
    </ScrollView>
  );
};

export default App;
