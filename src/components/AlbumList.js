

// import React,{useEffect, useState} from "react";
// import { FlatList } from "native-base";
// import AlbumDetail from "./AlbumDetail";
// import {Animated,View}from "react-native";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// const AlbumList = ({ list, navigation }) => {
//   const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} />;
//   const AnimatedIcon=Animated.createAnimatedComponent(MaterialCommunityIcons);
//   const [liked,setliked]=useState(false);
//   const currentValue =new Animated.Value(1);
//   useEffect(()=>{
//     if(liked==true){
//       Animated.spring(currentValue,{
//         toValue:2,
//         friction:2
//       }).start()
//     }
    
//   },[liked])
//   return (
//     <View flex={1}>
//     <FlatList
//     _dark={{ bg: "blueGray.900" }}
//     _light={{ bg: "#FEFFEF" }}
//     // marginTop={329}
//     marginBottom={8}
//       data={list}
//       renderItem={renderItem}
//       keyExtractor={item => item.title}
//     />  
//     </View>
      
//   );  
// }

// export default AlbumList;
import React from "react";
import { FlatList } from "native-base";
import AlbumDetail from "./AlbumDetail";

const AlbumList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} />;
  return (
    
    <FlatList
    _dark={{ bg: "#574E45" }}
    _light={{ bg: "#FEFFEF" }}
    // marginTop={329}
    marginBottom={8}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  );  
}

export default AlbumList;