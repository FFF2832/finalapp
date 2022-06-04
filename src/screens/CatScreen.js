import React , { useState }from "react";
import { Box , Text, Center, useColorMode,Image, ScrollView} from "native-base";
import CatList from "../components/CatList";
import albumData from "../json/cat.json";
import SegmentedControlTab from "react-native-segmented-control-tab";

const CatScreen = ({ navigation }) => {
  return (
    <Box _dark={{ bg: "#574E45" }}
    _light={{ bg: "#FEFFEF" }}>
      <ScrollView>
       <CatList 
       
        list={albumData.albumList}
        navigation={navigation}
       
       
      />
      
      {/* <Image
                    margin="0"
                    width="390"
                    height="215"
                    
                    
                    paddingRight={4}
                    position= "absolute" 
                    marginTop={0}
                    
                source={{ uri: "https://github.com/FFF2832/finalapp/blob/master/src/images/Vector%201.png?raw=true" }}
                alt="artist"
                />
                <Image
                    margin="0"
                    width="476"
                    height="185"
                    
                    
                    // paddingRight={4}
                    position= "absolute" 
                    alignSelf= 'center'
                    marginTop={6}
                    
                source={{ uri: "https://raw.githubusercontent.com/zhiyu414/json/master/image/%E6%B5%AA%E6%B5%AA%E6%88%90%E5%93%A1%E7%84%A1%E8%83%8C%E6%99%AF.png" }}
                alt="artist"
                /> */}
     </ScrollView>
    </Box>
  );
};

export default CatScreen;