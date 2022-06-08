
// import React, {useEffect, useState } from "react";
// import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,Center ,ScrollView } from "native-base"
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../redux/features/cartSlice";
// import {Animated,View}from "react-native";
// const AlbumDetail = ({ album, navigation }) => {
//   const dispatch = useDispatch();
 
  
//   const AnimatedIcon=Animated.createAnimatedComponent(MaterialCommunityIcons);
//   const [liked,setliked]=useState(false);
//   const [visible,setVisible]=useState(false);
//   const currentValue =new Animated.Value(1);
//   useEffect(()=>{
//     if(liked==true){
//       Animated.spring(currentValue,{
//         toValue:2,
//         friction:2
//       }).start(()=>{
//         Animated.spring(currentValue,{
//           toValue:1
//         }).start(()=>{
//           setVisible(false)
//         })
//       })
//     }
    
//   },[liked])
//   return (
//     <Box 
//     flex={1}
//     _dark={{ bg: "#4F5B57" }}
//     _light={{ bg: "#FEFFEF" }}
            
//   > 
// <ScrollView>
//     <Box
//       marginLeft={29} marginRight={29} marginTop={5} borderRadius={4} shadow={2} 
//       _dark={{ borderColor: 'blueGray.500', borderWidth: 0.6 }}  
//     >
     
//       <HStack  p={1} _dark={{ bg: "blueGray.900" }}
//         _light={{ bg: "white" }}>
          
//         <Pressable 
//           onPress={() => navigation.navigate('Detail', album)}
//         >
          
//           <HStack  >
//               {visible &&
//                     <AnimatedIcon  
//                     style={{
//                     position:"absolute",
//                     top:30,
                    
//                     left:"70%",
//                     elevation:4,
//                     zIndex:3,
//                     transform:[
//                       {scale:currentValue}
//                     ]
//               }}
//               name="heart" size={50} color="red"/>      
//               }
              
//             <Image
//               source={{ uri: album.image }}
//               alt="dog"
//               style={{width:87,height:103}}
//             />
//             <VStack marginLeft={15} marginTop={30}>    

//             <Box>     
//             <Text
//               style={{fontSize:16,}}
//             >{album.name}</Text> 
//             <Box position="absolute" top={-3} right={-13}>
//             <MaterialCommunityIcons name="chevron-right" color="#574E45" size={25} />
//             </Box>
//             </Box>

//             <Text
//               style={{fontSize:12,color:"#A5A5A5"}}
//             >{album.gender}</Text>  
//             </VStack>
//             <Pressable
//              onPress={() => {
//               dispatch(addToCart(album));
//             }}
//             >
//               <Box w={8} h={8} borderRadius={20} bgColor="#F9E6A1" position="absolute" top={35} right={-138}>
//                   <Box position="absolute" top={1} right={1}>
                  
//                     <MaterialCommunityIcons name={liked?"heart":"heart-outline"} 
//                     color="#574E45"
//                      size={25} 
//                      style={{
                      
//                      }}
//                     onPress={() => {
//                       setliked(!liked);
//                       if(liked==false){
//                         setVisible(true);
//                       }
                      
                      
//                       dispatch(addToCart(album));
//                     }}
//                     />
                   
//                   </Box>
//                 </Box>
//             </Pressable>
               
//           </HStack >
          
//         </Pressable>
//       </HStack >   
   
      
//     </Box> 
//     </ScrollView>
//     </Box> 
//   )};

// export default AlbumDetail;
import React , { useState,useEffect }from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,Center ,ScrollView } from "native-base"
import { TouchableOpacity,Animated,View} from "react-native"
import {updateSelector } from "../redux/selectors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from "react-redux";
import { addToCart,removeItem,updateItem , increment} from "../redux/features/cartSlice";
const AlbumDetail = ({ album, navigation }) => {
    const dispatch = useDispatch();
    //const cart = useSelector((state) => state.cart);
    const likestate = useSelector(updateSelector);
  const AnimatedIcon=Animated.createAnimatedComponent(MaterialCommunityIcons);
  const [liked,setliked]=useState(false);
  const [visible,setVisible]=useState(false);
  const currentValue =new Animated.Value(1);

  // const allAnime = useSelector((state) => state.allAnime)
  // const anime = useMemo(() => {
  //   for (let i = 0; i < allAnime.length; i += 1) {
  //     if (allAnime[i].id === animeIndex.id) {
  //       return allAnime[i]
  //     }
  //   }
  //   return animeIndex
  // }, allAnime)
  
  useEffect(()=>{
    if(liked==true){
    
      Animated.spring(currentValue,{
        toValue:2,
        friction:2,
        useNativeDriver: true
      }).start(()=>{
        Animated.spring(currentValue,{
          toValue:1,
          useNativeDriver: true
        }).start(()=>{
          setVisible(false)
        })
      })
      
    }
    else{
      dispatch(removeItem(album.id));
      //setliked({likestate});
    }
    
  },[liked])
  return (
    <Box 
    flex={1}
    _dark={{ bg: "#574E45" }}
    _light={{ bg: "#FEFFEF" }}
            
> 
<ScrollView>
    <Box
      marginLeft={29} marginRight={29} marginTop={5} borderRadius={4} 
       
    >
      
      <HStack  p={1} _dark={{ bg: "#35322E" }}
        _light={{ bg: "white" }}
        style={{shadowColor: '#000000',
       shadowOpacity: 0.4, shadowRadius: 1, shadowOffset: { height: 1, width: 0,}}}
        >
          
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          
          <HStack  >
          {visible &&
                    <AnimatedIcon  
                    style={{
                    position:"absolute",
                    top:30,
                    
                    left:"90%",
                    elevation:4,
                    zIndex:3,
                    transform:[
                      {scale:currentValue}
                    ]
              }}
              name="heart" size={50} color="#ECD563"/>      
              }
              
            <Image
              source={{ uri: album.image }}
              alt="dog"
              style={{width:87,height:103}}
            />
            <VStack marginLeft={15} marginTop={30}>    

            <Box>     
            <Text
              style={{fontSize:16,}}
            >{album.name}</Text> 
            <Box position="absolute" top={-3} right={-13}>
            {/* <MaterialCommunityIcons name="chevron-right" color="#574E45" size={25} /> */}
            </Box>
            </Box>

            <Text
              style={{fontSize:12,color:"#A5A5A5"}}
            >{album.gender}</Text>  
            </VStack>
            {/* <TouchableOpacity
             onPress={() => {
              dispatch(addToCart(album));
            }}
            > */}
              
              <Box w={50} h={50} borderRadius={60} bgColor="#F9E6A1" position="absolute" top={30} right={-130}>
                  <Box position="absolute" top={2} right={2}>
                  <MaterialCommunityIcons name={liked?"heart":"heart-outline"} 
                    color="#574E45"
                     size={35} 
                     
                     style={{
                      
                     }}
                    onPress={() => {
                      //dispatch(updateItem());
                    setliked(!liked);
                     
                      if(liked==false){
                        setVisible(true);

                       
                      }
                      //likestate?dispatch(removeItem(album)):dispatch(addToCart(album));
                      dispatch(addToCart(album));
                    }}
                    />

                  </Box>
                  {/* <Text>{likestate}</Text> */}
                </Box>
            {/* </TouchableOpacity> */}
                
          </HStack >
          
        </Pressable>
      </HStack >   
   
      
    </Box> 
    </ScrollView>
    </Box> 
  )};

export default AlbumDetail;