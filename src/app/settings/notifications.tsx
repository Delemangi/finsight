import { CheckBox } from "@rneui/base";
import { Text } from "@rneui/themed";
import { useNotificationState } from "@stores/notificationStore";
import { usePostStore } from "@stores/postStore";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";



const Notifications = () => {
    const {
        types: postTypes,
      } = usePostStore((state) => state);
    
    const stateDict: { [key: string]: any } = {};
    const setStateDict: { [key: string]: any } = {};
    
    postTypes.map((postType) => {
        const state = useNotificationState(postType)
        stateDict[postType] = state.state;
        setStateDict[postType] = state.setState;
    });

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
            {postTypes.map((postType) => {
                const { state, setState } = useNotificationState(postType);

                return (
                    <CheckBox
                    title={postType}
                    checked={state}
                    key={postType}
                    onPress={() => setState(!state)}
                    />
                );
            })}
            </ScrollView>
        </View>
    );
};

export default Notifications;