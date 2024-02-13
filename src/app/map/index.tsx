import ErrorScreen from "@components/ErrorScreen";
import MapWidget from "@components/MapWidget";
import { useLocationStore } from "@stores/locationStore";
import * as Location from "expo-location";
import { useEffect } from "react";

const Map = () => {
  const { setLatitude, setLongitude } = useLocationStore((state) => state);

  async function getUserLocation() {
    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    } catch (error) {
      return <ErrorScreen error={error} />;
    }
  }

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === "granted") {
      getUserLocation();
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return <MapWidget />;
};

export default Map;
