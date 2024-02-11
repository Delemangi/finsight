import Button from "@components/CameraButton";
import { makeStyles } from "@rneui/themed";
import { Camera, CameraType } from "expo-camera";
import Constants from "expo-constants";
import * as MediaLibrary from "expo-media-library";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Image, Text, View } from "react-native";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
  },
  controls: {
    justifyContent: "center",
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: theme.colors.white,
    marginLeft: 10,
  },
  camera: {
    flex: 1,
    borderRadius: 2,
    paddingHorizontal: 200,
  },
  topControls: {
    flex: 1,
  },
}));

export default function App() {
  const styles = useStyles();
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    const func = async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    };

    func();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current?.takePictureAsync();
        setImage(data?.uri ?? "");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        Alert.alert("Picture saved! 🎉");
        setImage(null);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!hasCameraPermission) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
            }}
          >
            <Button
              title=""
              icon="retweet"
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back,
                );
              }}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View style={styles.controls}>
        {image ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <Button
              title="Re-take"
              onPress={() => setImage(null)}
              icon="retweet"
            />
            <Button title="Save" onPress={savePicture} icon="check" />
          </View>
        ) : (
          <Button title="Take a picture" onPress={takePicture} icon="camera" />
        )}
      </View>
    </View>
  );
}
