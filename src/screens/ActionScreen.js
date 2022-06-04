import React from 'react';
import {
   Box, VStack,
   Center,
   Text, Pressable,useDisclose
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ActionSheet, { SheetManager } from "react-native-actions-sheet";

const ActionScreen = () => {
   const { isOpen, onOpen, onClose } = useDisclose();
   
   return (

      <VStack h="60%" w="100%" bg="#F9FBE7" borderRadius={20} borderWidth={2} >
         <Pressable onPress={onClose} position="absolute" top={2} right={3}>
            <MaterialCommunityIcons name="close" color="gray" size={40} />
         </Pressable>
        
         <ActionSheet id="helloworld_sheet">
         <Box>
            <Text>Hello World</Text>
            </Box>
         </ActionSheet>
      </VStack>
   );
};

export default ActionScreen;
