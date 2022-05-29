import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,Center } from "native-base"
import { Flex, Spacer } from "native-base";
const DTypeDetail = ({ dtype, navigation }) => {
  return (
    <Box 
      marginX={1} marginBottom={5} borderRadius={0}   flex="1" p={1} marginTop={2} marginLeft={4} 
      _dark={{ borderColor: '#4F5B57', borderWidth: 0 }}
    >
     
     
     <HStack 
        _dark={{ bg: "#4F5B57"}}
        _light={{ bg: "#E2D5C3" }}>
         

        <AspectRatio w="180" ratio={1} >
          <Box  >
          <Pressable 
          onPress={() => navigation.navigate('Detail', dtype)}
          >
          
             <Image
            margin="1"
            width="167"
            height="191"
            padding="2"
            borderRadius="7"
            paddingRight={4}
            
            source={{ uri: dtype.image }}
            alt="artist"
            />
            
            <Center width="167" height="10"   position= "absolute"   flex="1"  margin="1"  marginTop={156} 
             bg="#B9D2C8" opacity="0.8" borderRadius="7">
              <Text  color="#000000"  fontWeight="bold" opacity="2"   >{dtype.title}</Text> 
            </Center>
          </Pressable>   
             
            
         
         </Box>
        </AspectRatio>
        <AspectRatio w="171" ratio={1} >

          <Box>
          <Pressable 
          onPress={() => navigation.navigate('Detail', dtype)}
          >
              <Image
            margin="1"
            width="167"
            height="191"
            padding="1"
            borderRadius="7"
            
            source={{ uri: dtype.image_2 }}
            alt="artist"
            />
            
            <Center width="167" height="10"   position= "absolute"  flex="1"  margin="1"   marginTop={156} 
             bg="#B9D2C8" opacity="0.7"borderRadius="7" >
              <Text  color="#000000"  fontWeight="bold" opacity="2"  position= "absolute"  >{dtype.title2}</Text> 
            </Center>
           </Pressable>  
              
           
         </Box>
        </AspectRatio>
   
       
        {/* <VStack paddingLeft={2} justifyContent="space-around">
          <Text>{dtype.title}</Text>
          <Text>{dtype.artist}</Text>
        </VStack> */}
      </HStack>
     
     
      
      {/* <Box p={1} flex="1"  _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "white" }}>
        <Pressable 
          onPress={() => navigation.navigate('Detail', dtype)}
        >
        </Pressable>   
            <AspectRatio  width="200" ratio={1}>
          <Image
            // margin="1"
            source={{ uri: dtype.image_2 }}
            alt="artist"
          />
        </AspectRatio> 
          <AspectRatio width="100" ratio={1}>
          
                <Image
                source={{ uri: dtype.image }}
                alt="dtype"
                /> 

          </AspectRatio>
          
        
      </Box>    */}
    </Box>
  )};

export default DTypeDetail;
