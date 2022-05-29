
// import React from "react";
// import { Box,Image,Center} from "native-base";

// import { Linking } from 'react-native';

// import HomeList from "../components/HomeList";
// import typeData from "../json/type_section.json";

// const ContentScreen = ({ navigation }) => {
//   return (
//     <Box _dark={{bg:"#4F5B57"}} _light={{bg:"#E2D5C3"}}>
      
    
      
//       < HomeList 
//       ListHeaderComponent={
//         <>
//         list={typeData.typeList}
//         navigation={navigation}
//         </>
//       }
//       />
      
      
//     </Box>
//   );
// };

// export default ContentScreen;
import React from "react";
import { Box,Image,Center,Text,HStack,useColorMode} from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Linking ,Alert} from 'react-native';

import HomeList from "../components/HomeList";
import typeData from "../json/type_section.json";

const ContentScreen = ({ navigation }) => {
  const { colorMode } = useColorMode();
  return (
    <Box _dark={{bg:"#4F5B57"}} _light={{bg:"#E2D5C3"}} width="390" height="682">

      <Text marginTop={5}  _dark={{color:"#fff"}}marginLeft={4} marginBottom={3} colocr="#4F5B57">最近喜歡聽的歌</Text>
      <Box _dark={{bg:"#fff"}} _light={{bg:"#4F5B57"}} width={377} height={0.5}  marginLeft={2} marginBottom={3}></Box>
    <HStack>
        <Image
          source={{uri:"https://github.com/FFF2832/wkmidterm/blob/master/src/images/song.jpg?raw=true"}}
          borderRadius={7}
          height={111} width={111} marginLeft={4}
          alt="type"
          
           /> 
          <Image
          source={{uri:"https://i.kfs.io/album/global/148838114,2v1/fit/500x500.jpg"}}
          borderRadius={7}
          height={111} width={111}  marginLeft={3}
          alt="type"
          
           /> 
             <Image
          source={{uri:"https://i.kfs.io/album/global/48480738,3v1/fit/500x500.jpg"}}
          borderRadius={7}
          height={111} width={111}  marginLeft={3}
          alt="type"
          
           /> 
    </HStack>
    <HStack marginTop={3}>
        <Image
          source={{uri:"https://i.kfs.io/album/global/66951781,1v1/fit/500x500.jpg"}}
          borderRadius={7}
          height={111} width={111} marginLeft={4}
          alt="type"
          
           /> 
          <Image
          source={{uri:"https://i.kfs.io/album/global/143142489,0v1/fit/500x500.jpg"}}
          borderRadius={7}
          height={111} width={111} marginLeft={3}
          alt="type"
          
           /> 
           <Center bg="#B9D2C8"  borderRadius={7}
          height={111} width={111} marginLeft={3} _dark={{bg:"#000"}}>
                 <Box  marginRight={2}>
                <MaterialCommunityIcons
                name={'plus'}
                color={colorMode == 'light' ? '#4F5B57' : 'white'}
                size={50}
                onPress={() => Alert.alert("新增項目")}
                marginLeft={0} 
         
         
                />
                </Box>
           </Center>
             
    </HStack>
     
          
      
      
    </Box>
  );
};

export default ContentScreen;