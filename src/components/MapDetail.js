import React , { useState }from "react";

import { Box, Image, Pressable,Text,Center,useColorMode} from "native-base"
import {Alert,TouchableOpacity,StyleSheet} from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LinearGradient} from 'expo-linear-gradient';


const MapDetail  = ({ album, navigation }) => {
  const { colorMode } = useColorMode();
  // let { album } = props;
 
  return (
    

      <Box flex={1} justifyContent="center"  _dark={{bg:"#4F5B57"}} > 
    <Center  paddingLeft={44} paddingTop={2} paddingRight={5} _dark={{bg:"#4F5B57"}}
      >
      <Box width={277} height={0.5} bgColor="#4F5B57" marginBottom={10} _dark={{bg:"#fff"}}></Box> 
      <Box  flex="1"  >
      <Pressable 
          onPress={() => navigation.navigate('Map', album)}
        >
      <Image
          source={{uri: album.image}}
          borderRadius={7}
          height={407} width={277}
          alt="type"
          
           />  
      </Pressable>
        
         
         
      </Box>
          {/* <MaterialCommunityIcons
          name={'chevron-right'}
          color={colorMode == 'light' ? '#8CA19B' : 'gray'}
          size={60}
          
          /> */}
          
          <Box width={277} height={0.5} bgColor="#4F5B57" marginTop={10} _dark={{bg:"#fff"}}></Box>   
          <Box width={277} height={75}  marginTop={10} _dark={{bg:"#4F5B57"}}></Box>   
        {/* <Text marginTop={4}>{album.description}</Text> */}
    </Center>
    
    </Box>
   
    
  
  )
 
  
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    // width: 390,
    // height: 844,
  }
 
});




export default MapDetail;
