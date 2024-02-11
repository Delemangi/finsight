import { useGetPosts } from "@api/hooks";
import { isRouteAuthenticated } from "@auth/routes";
import LoadingSpinner from "@components/LoadingSpinner";
import { PostCard } from "@components/PostCard";
import { Text, makeStyles } from "@rneui/themed";
import { usePostStore } from "@stores/postStore";
import { useUserStore } from "@stores/userStore";
import { Redirect, usePathname } from "expo-router";
import { ScrollView, View } from "react-native";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: theme.colors.white,
  },
  loadingSpinner: {
    marginTop: 20,
  },
}));

const App = () => {
  const styles = useStyles();
  const { user } = useUserStore();
  const route = usePathname();
  const postsType = usePostStore((state) => state.type);
  const { data } = useGetPosts(postsType);

  if (!user && isRouteAuthenticated(route)) {
    return <Redirect href="/login" />;
  }

  return (
    <ScrollView>
      {postsType &&
        data &&
        data.map((post) => <PostCard key={post.url} post={post} />)}

      {postsType && !data && (
        <View style={styles.loadingSpinner}>
          <LoadingSpinner size="large" />
        </View>
      )}

      {!postsType && (
        <View style={styles.container}>
          <Text style={styles.text}>Please select a type!</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default App;
