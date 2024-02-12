import { CheckBox } from "@rneui/base";
import { Text } from "@rneui/themed";
import { usePostStore } from "@stores/postStore";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";

interface State {
    checked: boolean;
}

const Notifications = () => {
    const [state, setState] = useState<State>({ checked: false });
    
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
                    <CheckBox
                    title={postType}
                    checked={state.checked}
                    key={postType}
                    onPress={() => setState({ checked: !state.checked })}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default Notifications;