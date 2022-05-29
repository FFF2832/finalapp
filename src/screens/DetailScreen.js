
import React from "react";
import { Box,Image,Center} from "native-base";

// import { Box, HStack, VStack, AspectRatio, Text,  Pressable,Center } from "native-base"
// import {  ScrollView} from 'react-native';

import { Linking } from 'react-native';

import HomeList from "../components/HomeList";
import typeData from "../json/type_section.json";

const DetailScreen = ({ navigation }) => {
  return (
    <Box _dark={{bg:"#4F5B57"}} _light={{bg:"#E2D5C3"}}>
      
    
      
      < HomeList 
      ListHeaderComponent={
        <>
        list={typeData.typeList}
        navigation={navigation}
        </>
      }
      />
      
      
    </Box>
  );
};

export default  DetailScreen;