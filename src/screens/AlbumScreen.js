import React from "react";
import { Box ,Center,HStack,Image,Text,useColorMode} from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {  ScrollViewt} from 'react-native';
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

// import React from "react";
// import { Box ,Center,HStack,Image,useColorMode} from "native-base";
// import AlbumList from "../components/AlbumList";
// import albumData from "../json/albums.json";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {  ScrollView, Dimensions,View,StyleSheet,BVLinearGradient,Text} from 'react-native';
// import {LinearGradient} from 'expo-linear-gradient';
// import Counter from"../components/Counter"

// const AlbumScreen = ({ navigation }) => {
//   // const { colorMode } = useColorMode();
  
//   return (
   
//     <Box  _dark={{bg:"#4F5B57"}}>
      
      
//       <View style={styles.content}>
        
        
//        {/* <LinearGradient start={{x: 0, y: 0}}
//           end={{x: 0, y: 1}}
//           colors={['#EBE7E2', '#E2D5C3','E1C6A0']} style={styles.container}> */}
//        <LinearGradient colors={['#E2D5C3', '#718697', '#2b4963']} style={styles.container}>
//         <View>
//             < AlbumList 
//               list={albumData.albumList}
//               navigation={navigation}
//               marginTop={10}
//               marginBottom={10}
        
//               />
//         </View>
//       </LinearGradient>

//       </View>
      
//       {/* <Counter/> */}
//     </Box>
    
//   );
// };
// const styles = StyleSheet.create({
//   content: {
//     display: 'flex',
//     flexDirection: 'column',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // width: Dimensions.get('window').width,
//     // height: Dimensions.get('window').height,
//     // width: 390,
//     // height: 844,
//   },
//   linearGradient: {
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 5
//   },
 
// });
// export default AlbumScreen;