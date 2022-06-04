import React from "react";
import { Box , Text, Center, useColorMode,Image, ScrollView} from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/dog.json";


const AlbumScreen = ({ navigation }) => {
  return (
    <Box _dark={{ bg: "#574E45" }}
    _light={{ bg: "#FEFFEF" }}>
      {/* <ScrollView>
       <AlbumList 
       
        list={albumData.albumList}
        navigation={navigation}
       
       
      />
     </ScrollView> */}
    
       <AlbumList 
       
        list={albumData.albumList}
        navigation={navigation}
       
       
      />
     
    </Box>
  );
};

export default AlbumScreen;