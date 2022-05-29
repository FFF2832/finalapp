import React from "react";
import { Box ,Center,HStack,Image,Text,useColorMode} from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {  ScrollView} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Counter from"../components/Counter"

const AlbumScreen = ({ navigation }) => {
  // const { colorMode } = useColorMode();
  return (
   
    <Box bg="#E2D5C3" _dark={{bg:"#4F5B57"}}>
      
      < AlbumList 
        list={albumData.albumList}
        navigation={navigation}
        marginTop={10}
        bg="#E2D5C3"
        
      />
       
      {/* <Counter/> */}
    </Box>
    
  );
};

export default AlbumScreen;
