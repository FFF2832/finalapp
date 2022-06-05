import React from 'react';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, HStack ,VStack} from "native-base";


const CatDetailScreen = ({ route}) => {
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
    bodytest,
    state,
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
         <Box w={294} h={95} marginBottom={0} marginLeft={50}>
         <HStack marginTop={19}  alignSelf= 'flex-start' >
            <Text w={126}>
               <Text bold fontSize={15} color="#A5A5A5" >是否親人  </Text>
               {people_close}
             </Text>
             <Text marginLeft={45} fontSize={15} w={134}>
               <Text bold fontSize={15} color="#A5A5A5">是否親貓  </Text>
               {cat_close}
             </Text>
             
         </HStack>
         <HStack alignSelf= 'flex-start' marginTop={4} marginRight={0}  w={40} h={20}>
            <Text fontSize={15} >
               <Text bold  color="#A5A5A5" >是否已植入晶片  </Text>
               {microchip}
             </Text>
             <Text marginLeft={10} fontSize={15} >
               <Text bold color="#A5A5A5">是否親狗  </Text>
               {dog_close}
             </Text>
         </HStack>
         </Box>
         <Box 
          w={352}
          h={200}
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
             <Text w={270} fontSize={15}  lineHeight={30}>
               <Text  >救援經過:  </Text>
               {process}
             </Text>
             
           </HStack>
           </ScrollView>
         
         </Box> 
         <VStack alignSelf= 'center'   w={310} h={84} marginTop={19} marginBottom={0}>
         <HStack >
             <Box w={2} h={5} bgColor="#ECD563"  marginRight={2}/>
             <Text fontSize={15} bold>
               <Text fontWeight="normal">血檢快篩貓瘟、貓白血、貓愛滋是否通過：</Text>
               {bodytest}
             </Text>
           </HStack>
           <HStack marginTop={2}>
             <Box w={2} h={5} bgColor="#ECD563"  marginRight={2}/>
             <Text fontSize={15} bold >
               <Text fontWeight="normal">目前狀態：</Text>
               {state}
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
         <VStack alignSelf= 'center'  w={310} h={72} marginTop={19} marginBottom={5}>
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

export default CatDetailScreen;