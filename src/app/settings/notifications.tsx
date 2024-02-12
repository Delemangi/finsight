import NotificationCheckBox from "@components/NotificationCheckBox";
import { Text } from "@rneui/themed";
import { usePostStore } from "@stores/postStore";
import React from "react";
import { ScrollView, View } from "react-native";



const Notifications = () => {
    const {
        types: postTypes,
      } = usePostStore((state) => state);
    
    return (
        <View style={{
                paddingTop: 40,
                paddingBottom: 40
            }}>
            <Text h3={true} 
                style={{textAlign: "center", 
                padding: 10}}>
                Select which notifications you would like to receive
            </Text>
            <ScrollView>
            {postTypes.map((postType) => (
                <NotificationCheckBox key={postType} postType={postType} />
            ))}
            </ScrollView>
        </View>
    );
};

export default Notifications;