import { useGetPosts } from "@api/hooks";
import LoadingSpinner from "@components/LoadingSpinner";
import PostCard from "@components/PostCard";
import PostsHeader from "@components/PostsHeader";
import { makeStyles } from "@rneui/themed";
import { usePostStore } from "@stores/postStore";
import { useUserStore } from "@stores/userStore";
import { ScrollView, View, Text } from "react-native";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    height: "100%",
  },
  postContainer: {
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

const Posts = () => {
  const styles = useStyles();
  const postsType = usePostStore((state) => state.type);
  const user = useUserStore((state) => state.user);
  const { data } = useGetPosts(postsType);

  return (
    <View style={styles.container}>
      <PostsHeader />
      <ScrollView>
        {postsType &&
          data &&
          data.map((post) => <PostCard key={post.url} post={post} />)}

        {postsType && !data && (
          <View style={styles.loadingSpinner}>
            <LoadingSpinner size="large" />
          </View>
        )}

        {!postsType && user && (
          <View style={styles.postContainer}>
            <Text style={styles.text}>Please select a type!</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Posts;
