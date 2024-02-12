import { useGetPosts } from "@api/hooks";
import { usePostStore } from "@stores/postStore";
import { useEffect, useState } from "react";
import BackgroundFetch from "react-native-background-fetch";


export const fetchPostsTask = (taskId: string | undefined) => {
    const postsTypes = usePostStore((state) => state.types);
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const newData : any = {};
    
            await Promise.all(
              postsTypes.map(async (postType) => {
                try {
                  const result = await useGetPosts(postType);
                  newData[postType] = result;
                } catch (error) {
                  console.error(`Error fetching data for ${postType}:`, error);
                }
              })
            );

            setData(newData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [postsTypes]);

    
    console.log(`Background task with ID ${taskId} executed`);
    // Signal task completion
    BackgroundFetch.finish(taskId);
};