
// import React from "react";
// import { Box,Image,Center} from "native-base";

// // import { Box, HStack, VStack, AspectRatio, Text,  Pressable,Center } from "native-base"
// // import {  ScrollView} from 'react-native';

// import { Linking } from 'react-native';

// import HomeList from "../components/HomeList";
// import typeData from "../json/type_section.json";

// const DetailScreen = ({ navigation }) => {
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

// export default  DetailScreen;
import React from 'react';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, HStack ,VStack} from "native-base";


const DetailScreen = ({ route}) => {
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
      <ScrollView >
        <Center>
       <Box
          w="100%"
          h={800}
          marginTop={260}
          bgColor="#FEFFEF"
          borderRadius={20}
       >
         
          <Box 
          w={352}
          h={112}
          bgColor="#fff"
          borderRadius={20}
          position="absolute"
          top={27}
          alignSelf= 'center'
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
         
         <HStack marginTop={170}  alignSelf= 'flex-start' marginLeft={50}>
            <Text>
               <Text bold fontSize={15} color="#A5A5A5">是否親人  </Text>
               {people_close}
             </Text>
             <Text marginLeft={70} fontSize={15}>
               <Text bold fontSize={15} color="#A5A5A5" >是否親貓  </Text>
               {cat_close}
             </Text>
             
         </HStack>
         <HStack alignSelf= 'flex-start' marginTop={4} marginRight={0} marginLeft={49}>
            <Text fontSize={15}>
               <Text bold  color="#A5A5A5">是否已植入晶片  </Text>
               {microchip}
             </Text>
             <Text marginLeft={9} fontSize={15}>
               <Text bold color="#A5A5A5">是否親狗  </Text>
               {dog_close}
             </Text>
         </HStack>
         <Box 
          w={352}
          h={112}
          bgColor="#fff"
          borderRadius={20}
          position="absolute"
          top={246}
          alignSelf= 'center'
         >
           
           <HStack alignSelf= 'flex-start' marginTop={13} marginLeft={5}>
             <Box w={2} h={5} bgColor="#ECD563" marginRight={2}/>
             <Text w={270} fontSize={15}>
               <Text  >救援經過:  </Text>
               {process}
             </Text>
             
           </HStack>
          
         
         </Box> 
         <VStack alignSelf= 'center'  marginTop={160} w={310}>
         <HStack >
             <Box w={2} h={5} bgColor="#ECD563"  marginRight={2}/>
             <Text fontSize={15} bold>
               <Text fontWeight="normal">幼犬(2-6個月)驗腸炎、犬瘟快篩是否通過：</Text>
               {ytest}
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
          h={112}
          bgColor="#ffff"
          borderRadius={20}
          position="absolute"
          top={510}
          alignSelf= 'center'
         >
           <HStack marginLeft={5} marginTop={13}>
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
         <VStack alignSelf= 'center' marginTop={160} w={310}>
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