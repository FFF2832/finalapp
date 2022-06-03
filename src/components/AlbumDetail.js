
// import React from "react";
// import { StyleSheet } from "react-native";
// import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,Center } from "native-base"

// const AlbumDetail = ({ album, navigation }) => {
//   return (
//     <Box 
//       marginX={0} marginBottom={2} marginTop={5}  shadow={2} flex={1}
//       // _dark={{  borderWidth: 0.6 }}
//     >
      
//       <Center>
//       <VStack>
//           <HStack>
//           <Pressable 
//           onPress={() => navigation.navigate('Content',album)}
//           > 
//             <Center  width="304" height="167"  bg="#B9D2C8" borderRadius={7}  >
            
//             <Image
//               source={{ uri: album.image }}
//               alt="album"
//               width="304" height="167" 
//               flex={1}
//               borderRadius={7}
             
//             /> 
//              <Center  width="304" height="46"  bg="#B9D2C8" borderRadius={7}   >
//              <Text position= "absolute"  fontWeight="bold"  marginRight={50} _dark={{  color:"#4F5B57"}} color="#4F5B57">{album.title}</Text>
//              </Center>
//             </Center>
//             </Pressable> 
//           </HStack>
         
//       </VStack>
//       </Center>
      
     
//     </Box>
//   )};

// export default AlbumDetail;
import React, {useEffect, useState } from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,Center ,ScrollView } from "native-base"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import {Animated,View}from "react-native";
const AlbumDetail = ({ album, navigation }) => {
  const dispatch = useDispatch();
 
  
  const AnimatedIcon=Animated.createAnimatedComponent(MaterialCommunityIcons);
  const [liked,setliked]=useState(false);
  const [visible,setVisible]=useState(false);
  const currentValue =new Animated.Value(1);
  useEffect(()=>{
    if(liked==true){
      Animated.spring(currentValue,{
        toValue:2,
        friction:2
      }).start(()=>{
        Animated.spring(currentValue,{
          toValue:1
        }).start(()=>{
          setVisible(false)
        })
      })
    }
    
  },[liked])
  return (
    <Box 
    flex={1}
    _dark={{ bg: "#4F5B57" }}
    _light={{ bg: "#FEFFEF" }}
            
  > 
<ScrollView>
    <Box
      marginLeft={29} marginRight={29} marginTop={5} borderRadius={4} shadow={2} 
      _dark={{ borderColor: 'blueGray.500', borderWidth: 0.6 }}  
    >
     
      <HStack  p={1} _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "white" }}>
          
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          
          <HStack  >
              {visible &&
                    <AnimatedIcon  
                    style={{
                    position:"absolute",
                    top:30,
                    
                    left:"70%",
                    elevation:4,
                    zIndex:3,
                    transform:[
                      {scale:currentValue}
                    ]
              }}
              name="heart" size={50} color="red"/>      
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
            <MaterialCommunityIcons name="chevron-right" color="#574E45" size={25} />
            </Box>
            </Box>

            <Text
              style={{fontSize:12,color:"#A5A5A5"}}
            >{album.gender}</Text>  
            </VStack>
            <Pressable
             onPress={() => {
              dispatch(addToCart(album));
            }}
            >
              <Box w={8} h={8} borderRadius={20} bgColor="#F9E6A1" position="absolute" top={35} right={-138}>
                  <Box position="absolute" top={1} right={1}>
                  
                    <MaterialCommunityIcons name={liked?"heart":"heart-outline"} 
                    color="#574E45"
                     size={25} 
                     style={{
                      
                     }}
                    onPress={() => {
                      setliked(!liked);
                      if(liked==false){
                        setVisible(true);
                      }
                      
                      
                      dispatch(addToCart(album));
                    }}
                    />
                    {/* {like?
                    <MaterialCommunityIcons
                    name={'heart-outline'}
                    color={'#EA9C49'}
                    size={30}
                    
                    />:<MaterialCommunityIcons
                    name={'heart'}
                    color={'#EA9C49'}
                    size={30}
                    
                    />
                  } */}
                  {/* <MaterialCommunityIcons
                   style={{
            
                      color: anime.isFavorite ? 'tomato' : 'black'
                     }}
                   name={
                    anime.isFavorite ? iconType('heart') : iconType('heart-outline')
                    }
                    color="#000"
                    size={24}
                    onPress={() => {
                      }}
                    /> */}
                  </Box>
                </Box>
            </Pressable>
                {/* <Box w={8} h={8} borderRadius={20} bgColor="#F9E6A1" position="absolute" top={35} right={-138}>
                  <Box position="absolute" top={1} right={1}>
                    <MaterialCommunityIcons name="heart-outline" color="#574E45" size={25} />
                  </Box>
                </Box> */}
          </HStack >
          
        </Pressable>
      </HStack >   
   
      
    </Box> 
    </ScrollView>
    </Box> 
  )};

export default AlbumDetail;