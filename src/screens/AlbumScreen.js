import React from "react";
import { Box , Text, Center, useColorMode,Image, ScrollView} from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/dog.json";


const AlbumScreen = ({ navigation }) => {
  return (
    <Box _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "#FEFFEF" }}>
      <ScrollView>
       <AlbumList 
       
        list={albumData.albumList}
        navigation={navigation}
       
       
      />
     </ScrollView>
    </Box>
  );
};

export default AlbumScreen;