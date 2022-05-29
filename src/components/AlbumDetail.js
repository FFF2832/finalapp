
import React from "react";
import { StyleSheet } from "react-native";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,Center } from "native-base"

const AlbumDetail = ({ album, navigation }) => {
  return (
    <Box 
      marginX={0} marginBottom={2} marginTop={5}  shadow={2} flex={1}
      // _dark={{  borderWidth: 0.6 }}
    >
      
      <Center>
      <VStack>
          <HStack>
          <Pressable 
          onPress={() => navigation.navigate('Content',album)}
          > 
            <Center  width="304" height="167"  bg="#B9D2C8" borderRadius={7}  >
            
            <Image
              source={{ uri: album.image }}
              alt="album"
              width="304" height="167" 
              flex={1}
              borderRadius={7}
             
            /> 
             <Center  width="304" height="46"  bg="#B9D2C8" borderRadius={7}   >
             <Text position= "absolute"  fontWeight="bold"  marginRight={50} _dark={{  color:"#4F5B57"}} color="#4F5B57">{album.title}</Text>
             </Center>
            </Center>
            </Pressable> 
          </HStack>
         
      </VStack>
      </Center>
      
     
    </Box>
  )};

export default AlbumDetail;
{/* <Pressable 
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
          </Pressable>    */}