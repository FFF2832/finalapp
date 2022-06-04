// import React from "react";
// import { Box , Text, Center, useColorMode,Image, ScrollView} from "native-base";
// import AlbumList from "../components/AlbumList";
// import albumData from "../json/dog.json";


// const MapScreen = ({ navigation }) => {
//   return (
//     <Box _dark={{ bg: "#574E45" }}
//     _light={{ bg: "#FEFFEF" }}>
      
    
//        <AlbumList 
       
//         list={albumData.albumList}
//         navigation={navigation}
       
       
//       />
     
//     </Box>
//   );
// };

// export default MapScreen;
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider, Box } from 'native-base';
import ActionButton from '../components/ActionButton';
  
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
             
            <Marker
              coordinate={marker.coord}
              title={marker.name}
              description={marker.address}
              
            />
            {/* <ActionButton zoomRatio={zoomRatio}    /> */}
          </MapView>
        </Box>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};