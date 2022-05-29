import React from "react";
import { Text, HStack, Pressable, Center, Box} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ListItem = ({ title, navigation, destination }) => {
  return (
    <Pressable
      onPress={() => {
        destination ? navigation.navigate(destination) : null;
      }}
    >
      <HStack
        _dark={{
          bg: "#4F5B57",
          borderColor: "#4F5B57",
          borderButtomWidth: 0.6,
        }}
        _light={{ bg: "#E2D5C3" }}
        px="4"
        py="4"
        borderTopWidth={0}
        borderColor="#E2D5C3"
        justifyContent="space-between"
        marginTop={0}
        
      >
        <Center width="30" height="30"   position= "absolute"  style={{elevation:2}} flex="1" borderRadius="9" marginTop={3} marginLeft={5} 
        _dark={{bg: "#4F5B57"}} _light={{bg:"#4F5B57"}}> 
         <MaterialCommunityIcons name="cog-outline" color="#fff"  size={26} />
         </Center>

        <Text fontSize={15} marginRight={150} >{title}</Text>
        <AntDesign name="right" color="gray" size={20} />

        

      </HStack>
    </Pressable>
  );
};

export default ListItem;
