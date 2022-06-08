import React , { useState,useEffect }from 'react';
import { Linking,TouchableOpacity } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, HStack ,VStack} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,removeItem } from "../redux/features/cartSlice";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {updateSelector } from "../redux/selectors";
const DetailScreen = ({ route}) => {
  const dispatch = useDispatch();
  const likestate = useSelector(updateSelector);
  const cart = useSelector((state) => state.cart);
  const [liked,setliked]=useState(false);
  ;
  const [visible,setVisible]=useState(false);
  const { name,
        birthday,
        gender,
        process,
        Vaccine,
        image,
        people_close,
        cat_close,
        dog_close,
        microchip,
        ytest,
        otest,
        bug_inside,
        bug_ousitde,
        special_notice,
        habit
      } = route.params;
  return (
     <>
      
        
      <Image
            source={{uri: image }}
            alt='dogImage'
            w="100%"
            h={406}
            position="absolute"
            top={0}
            
          />
         <TouchableOpacity
             onPress={() => {
              // dispatch(addToCart((route.params)));
              // if({likestate}==0){
              //   setliked(!liked);
                
              // }
            }}
            >
        {/* <Box w={50} h={50} borderRadius={60} bgColor="#F9E6A1"  top={30} right={-130}
        
        >

                  <Box position="absolute" top={2} right={2}>

                  <MaterialCommunityIcons name={liked?"heart":"heart-outline"} 
                    color="#574E45"
                     size={35} 
                     
                     style={{
                      
                     }}
                     onPress={() => {
                      setliked(!liked);
                      dispatch(addToCart((route.params)));
                      if({likestate}==0){
                        setliked(!liked);
                        
                      }
                     
                      //dispatch(addToCart((route.params)));
                      
                     
                    }}
                    />
                  </Box>
                  <Text>{setliked}</Text>
        </Box> */}
         </TouchableOpacity>
      <ScrollView >
        <Center>
       <Box
          w="100%"
          // h={1000}
          marginTop={260}
         paddingBottom={5}
          
          _dark={{ bg: "#574E45" }}
          _light={{ bg: "#FEFFEF" }}
          borderRadius={20}
       >
           
          
          <Box 
          w={352}
          h={116}
          _dark={{ bg: "#35322E" }}
          _light={{ bg: "#fff" }}
          borderRadius={20}
          // position="absolute"
          marginTop={27}
          alignSelf= 'center'
          marginBottom={19}
         >
           <Text bold fontSize={20} marginLeft={27} marginTop={15}>{name}</Text>
           <HStack  marginTop={2} alignSelf= 'flex-start' marginLeft={5}>
             <Box w={2} h={5} bgColor="#ECD563"  marginRight={2} />
             <Text fontSize={15}>{birthday}</Text>
           </HStack>
           <HStack  marginTop={1} alignSelf= 'flex-start' marginLeft={5}>
             <Box w={2} h={5} bgColor="#ECD563"  marginRight={2} />
             <Text fontSize={15}>{gender}</Text>
           </HStack>
           
         </Box> 
         <Center w={294} h={70} marginTop={19} marginLeft={0} alignSelf="center">
         <HStack marginTop={19}  alignSelf= 'flex-start' >
            <Text w={180}>
               <Text bold fontSize={15} color="#A5A5A5" >是否親人  </Text>
               {people_close}
             </Text>
             <Text marginLeft={0} fontSize={15} w={134}>
               <Text bold fontSize={15} color="#A5A5A5">是否親貓  </Text>
               {cat_close}
             </Text>
             
         </HStack>
         <HStack alignSelf= 'flex-start' marginTop={4} marginRight={0}  w={40} h={20}>
            <Text fontSize={15} w={180}>
               <Text bold  color="#A5A5A5" >是否已植入晶片  </Text>
               {microchip}
             </Text>
             <Text marginLeft={0} fontSize={15} w={134}>
               <Text bold color="#A5A5A5">是否親狗  </Text>
               {dog_close}
             </Text>
         </HStack>
         </Center>
         <Box 
          w={352}
          h={170}
          _dark={{ bg: "#35322E" }}
          _light={{ bg: "#fff" }}
          borderRadius={20}
          // position="absolute"
          marginTop={19}
          alignSelf= 'center'
         >
           <ScrollView>
           <HStack alignSelf= 'flex-start' marginTop={13} marginLeft={5} >
             <Box w={2} h={5} bgColor="#ECD563" marginRight={2} marginTop={1}/>
             <Text w={305} fontSize={15}  lineHeight={30}>
               <Text  >救援經過:  </Text>
               {process}
             </Text>
             
           </HStack>
           </ScrollView>
         
         </Box> 
         <VStack alignSelf= 'center'   w={310} h={98} marginTop={19} marginBottom={0}>
         <HStack >
             <Box w={2} h={5} bgColor="#ECD563"  marginRight={2}/>
             <Text fontSize={15} bold>
               <Text fontWeight="normal">幼犬(2-6個月)驗腸炎、犬瘟快篩是否通過：</Text>
               { ytest}
             </Text>
           </HStack>
           <HStack marginTop={2}>
             <Box w={2} h={5} bgColor="#ECD563"  marginRight={2}/>
             <Text fontSize={15} bold >
               <Text fontWeight="normal">成犬(6個月以上)心絲蟲、艾莉希、萊姆病、伊文氏艾莉希體是否通過：</Text>
               {otest}
             </Text>
           </HStack>

         </VStack>
         <Box 
          w={352}
          h={140}
          _dark={{ bg: "#35322E" }}
          _light={{ bg: "#fff" }}
          borderRadius={20}
          // position="absolute"
          marginTop={19}
          alignSelf= 'center'
         >
           <HStack marginLeft={5} marginTop={13} w={300}>
             <Box w={2} h={5} bgColor="#ECD563"  marginRight={2}/>
             <Text fontSize={15} bold>
               <Text fontWeight="normal">預防針施打狀況(下一次施打時間): </Text>
               {Vaccine}
            </Text>
           </HStack>

           
            <HStack marginLeft={5} marginTop={2}>
             <Box w={2} h={5} bgColor="#ECD563"  marginRight={2}/>
             <Text fontSize={15} bold>
               <Text fontWeight="normal">上一次體內驅蟲時間： </Text>
               {bug_inside}
            </Text>
           </HStack>

            
            <HStack marginLeft={5} marginTop={2}>
             <Box w={2} h={5} bgColor="#ECD563"  marginRight={2}/>
             <Text fontSize={15}bold >
               <Text fontWeight="normal">上一次體外驅蟲時間：</Text>
               {bug_ousitde}
            </Text>
           </HStack>

            
         </Box> 
         <VStack alignSelf= 'center'  w={310} h={67} marginTop={19} marginBottom={20}>
         <HStack >
             <Box w={2} h={5} bgColor="#ECD563" marginRight={2}/>
             <Text fontSize={15} bold>
               <Text fontWeight="normal">有沒有特別習慣：</Text>
               {habit}
             </Text>
           </HStack>

            
             <HStack marginTop={5}>
             <Box w={2} h={5} bgColor="#ECD563" marginRight={2} />
             <Text fontSize={15} bold>
               <Text fontWeight="normal">有沒有什麼需要特別照顧的地方：</Text>
               {special_notice}
             </Text>
           </HStack>

             
         </VStack>
       </Box>
       </Center>
       </ScrollView>
       
      </>
     
  );
}

export default DetailScreen;

