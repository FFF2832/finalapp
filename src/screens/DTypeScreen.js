import React from "react";
import { Box,Image,Center} from "native-base";
import DTypeList from "../components/DTypeList";
import typeData from "../json/type.json";
// import { Box, HStack, VStack, AspectRatio, Text,  Pressable,Center } from "native-base"
import {  ScrollView} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
const DTypeScreen = ({ list,navigation }) => {
  const renderItem = ({ item }) => <DTypeDetail dtype={item} navigation={navigation} />;
  return (
    <>
    
      <FlatList
        ListHeaderComponent={
          < DTypeList 
        _dark={{ bg: "#4F5B57"  }}
        _light={{ bg: "#E2D5C3"  }}
        
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.title}
          paddingBottom={10}

          list={typeData.typeList}
          navigation={navigation}
          />
        }
        />  
     


    
   
    </>
  );
};

export default DTypeScreen;


