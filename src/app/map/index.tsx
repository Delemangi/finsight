import MapWidget from "@components/MapWidget";
import { useLocationStore } from "@stores/locationStore";
import * as Location from 'expo-location';
import { useEffect } from "react";


const Map = () => {
    const {
        setLatitude,
        setLongitude
      } = useLocationStore((state) => state);

    async function getUserLocation() {
        try {
            const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
            console.log('Current location:', location.coords.latitude, location.coords.longitude);
            setLatitude(location.coords.latitude)
            setLongitude(location.coords.longitude)
        } catch (error) {
            console.error('Error getting location:', error);
        }
    }

    const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status === 'granted') {
        // Permission granted, get the user's location
        getUserLocation();
    } else {
        console.log('Location permission denied');
        // Handle the case where the user denied location permission
    }
    };


    useEffect(() => {
        requestLocationPermission()
    }, []);
    
    return <MapWidget/>
}

export default Map;
