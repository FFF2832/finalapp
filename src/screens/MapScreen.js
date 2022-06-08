import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider, Box } from 'native-base';
import ActionButton from '../components/ActionButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  
export default function MapScreen() {
const [zoomRatio, setZoomRatio] = useState(1);
  const [region, setRegion] = useState({
    longitude: 121.52455772150479,
    latitude:  25.045762504950567,
    longitudeDelta: 0.01,
    latitudeDelta: 0.02,
  })
  const [marker, setMarker] = useState({
    coord: {
      longitude: 121.52455772150479,
      latitude: 25.024624,
    },
    name: "浪浪別哭台北店",
    address: "台北市中正區林森北路9巷13號",
  });


  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Box flex={1}>
          <MapView
            region={region}
            style={{ flex: 1 }}
            showsTraffic
           
          >
             
            {/* <Marker>
              coordinate={marker.coord}
              title={marker.name}
              description={marker.address}
              <Icon name={"map-marker"} size={60} color="#B12A5B" />
              </Marker> */}
              
              <Marker
              coordinate={marker.coord}
              title={marker.name}
              description={marker.address}
            >
              <Icon name={"map-marker-radius"} size={40} color="#D64747" />
            </Marker>

          </MapView>
        </Box>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};