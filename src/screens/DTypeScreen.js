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
    {/* ListHeaderComponent={ */}
    
    {/* <Box>
          <Image
            
            width="413"
            height="191"
            source={{ uri: "https://github.com/FFF2832/wkmidterm/blob/master/src/images/debby-hudson-zAJcnffG8xw-unsplash.png?raw=true" }}
            alt="1"
            />
            <Center 
            width="200" height="10" bg="#E2D5C3" position= "absolute" zIndex= "999" elevation="2"  marginTop={88} marginLeft={90}
            >
            
            </Center>
            <Image
             width="172"
             height="54"
             flex="1"
             position= "absolute" zIndex= "999" elevation="2"
             marginTop={70}
             marginLeft={100}
             marginBack={2}
            source={{uri:"https://github.com/FFF2832/wkmidterm/blob/master/src/images/Persnote.png?raw=true"}}
            alt="1"
            />
           
    </Box> */}
     
      {/* < DTypeList 
        list={typeData.typeList}
        navigation={navigation}
      /> */}
      

    
     {/* < DTypeList 
      ListHeaderComponent={
        <>
        list={typeData.typeList}
        navigation={navigation}
        </>
      }
      /> */}
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


