import React, { useState } from 'react';
import { TouchableOpacity } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import ModalDropdown from 'react-native-modal-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AlbumScreen from "./AlbumScreen"
import CatScreen from "./CatScreen"
import { Box, Text, Center, useColorMode ,Image, HStack} from "native-base";
import { ScrollView } from 'react-native-gesture-handler';


// export default function TabVAccountSettingScreeniewExample() {
   const MenuScreen = ({navigation}) => {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const { colorMode } = useColorMode();

   const SegmentedContent = () => {
      if (selectedIndex == 1) {
         return (
            <Center flex={1}
               _dark={{ bg: "#574E45" }}
               _light={{ bg: "#FEFFEF" }}>
               
                   <Text color="#a5a5a5"  marginTop={150}fontSize={15} >等待添加...</Text>
               
            </Center>
         )
      } else if(selectedIndex == 2){
         return (
            <Center flex={1}
               _dark={{ bg: "#574E45" }}
               _light={{ bg: "#FEFFEF" }}>
              
                   <Text color="#a5a5a5"marginTop={150} fontSize={15} >等待添加...</Text>
               
            </Center>
         )
      }else if(selectedIndex == 3){
        return (
            <Center flex={1}
               _dark={{ bg: "#574E45" }}
               _light={{ bg: "#FEFFEF" }}>
              
                   <Text color="#a5a5a5"marginTop={150} fontSize={15} >等待添加...</Text>
               
            </Center>
        )
     }else{
        return (
           <Box flex={1}
              _dark={{ bg: "#574E45" }}
              _light={{ bg: "#FEFFEF" }}>
                <ScrollView>
                    <Center>
                    <Box w={332} h={0.5}_dark={{ bg: "#fff" }}_light={{ bg: "#0B0A09" }}marginTop={4}/>
                    <Box marginTop={5} w={326}>
                     <HStack>
                     <Text  bold fontSize={15}>紅牌蒂蒂海鮮燉飯</Text>
                     <Text bold fontSize={15} marginLeft={135}> $270</Text>
                     </HStack>
                     <Text bold fontSize={12} color="#a5a5a5">洋葱碎/蒜碎/透抽/鮮蝦/綜合蔬菜/蛤媽</Text>
                    </Box>
                    <Box marginTop={5} w={326}>
                     <HStack>
                     <Text  bold fontSize={15}>白白的奶油白醬燉飯（五辛素)</Text>
                     <Text bold fontSize={15} marginLeft={42}> $260</Text>
                     </HStack>
                     <Text bold fontSize={12} color="#a5a5a5">鮮菇/杏鲍菇/蔥菇/粽合蔬菜</Text>
                    </Box>
                    <Box marginTop={5} w={326}>
                    <HStack>
                     <Text  bold fontSize={15}>唐揚咖哩雞飯</Text>
                     <Text bold fontSize={15} marginLeft={170}> $270</Text>
                     </HStack>
                     <Text bold fontSize={12} color="#a5a5a5">吉揚雞塊!滑嫩蛋包/洋蔥碎/蒜碎/蔥菇片/綜合蔬菜</Text>
                    </Box>
                    <Box marginTop={5} w={326}>
                    <HStack>
                     <Text  bold fontSize={15}>泡菜(豬肉/牛肉)燉飯</Text>
                     <Text bold fontSize={15} marginLeft={108}> $270</Text>
                     </HStack>
                     <Text bold fontSize={12} color="#a5a5a5" >洋恧碎/慹碎/韓式泡菜/辣醬/豬or牛肉片/起司片/綜{"\n"}合蔬菜</Text>
                    </Box>
                    <Box marginTop={5} w={326}>
                    <HStack>
                     <Text  bold fontSize={15}>南洋牛肉飯</Text>
                     <Text bold fontSize={15} marginLeft={188}> $280</Text>
                     </HStack>
                     <Text bold fontSize={12} color="#a5a5a5">洋蔥碎/蒜碎/綜合蔬菜/蘑菇/檸檬/牛肉片</Text>
                    </Box>
                    <Box marginTop={5} w={326}>
                    <HStack>
                     <Text  bold fontSize={15}>火辣豬豬</Text>
                     <Text bold fontSize={15} marginLeft={205}> $270</Text>
                     </HStack>
                     <Text bold fontSize={12} color="#a5a5a5">洋蔥碎/蒜碎/綜合蔬菜/蘑菇/牛番茄/豬絞肉</Text>
                    </Box>
                    <Box marginTop={5} w={326}>
                    <HStack>
                     <Text  bold fontSize={15}>班班首選青醬雞腿排</Text>
                     <Text bold fontSize={15} marginLeft={120}> $260</Text>
                     </HStack>
                     <Text bold fontSize={12} color="#a5a5a5">洋洋葸碎/蒜碎/綜合蔬菜/杏鮑菇/炸雞腿排</Text>
                    </Box>

                    <Box w={332} h={0.5}_dark={{ bg: "#fff" }} _light={{ bg: "#0B0A09" }}marginTop={4}/>

                    <Box marginTop={5} w={326}>
                    <HStack>
                     <Text  bold fontSize={15}>南洋雞肉義大利麵</Text>
                     <Text bold fontSize={15} marginLeft={140}> $270</Text>
                     </HStack>
                     <Text bold fontSize={12} color="#a5a5a5">洋蔥碎/蒜碎/蘑菇/雞肉/檸檬/綜合蔬菜</Text>
                    </Box>
                    <Box marginTop={5} w={326}>
                    <HStack>
                     <Text  bold fontSize={15}>田園青醬義大利麵（五辛素）</Text>
                     <Text bold fontSize={15} marginLeft={53}> $260</Text>
                     </HStack>
                     <Text bold fontSize={12} color="#a5a5a5">蕃茄/核桃/綜合菇/綜合蔬菜</Text>
                    </Box>
                    <Box marginTop={5} w={326}>
                    <HStack>
                     <Text  bold fontSize={15}>紅牌蒂蒂海鮮義大利麵</Text>
                     <Text bold fontSize={15} marginLeft={105}> $280</Text>
                     </HStack>
                     <Text bold fontSize={12} color="#a5a5a5">洋蔥碎/蒜碎/杏鮑菇/鮮蝦/透抽/蛤蠾/綜合蔬菜</Text>
                    </Box>
                    <Box marginTop={5} w={326}>
                    <HStack>
                     <Text  bold fontSize={15}>班班首選青醬蝦義大利麵</Text>
                     <Text bold fontSize={15} marginLeft={88}> $290</Text>
                     </HStack>
                     <Text bold fontSize={12} color="#a5a5a5">洋蔥碎/蒜碎/鮮蝦/杏鮑菇/綜合蔬菜</Text>
                    </Box>
                    <Box marginTop={5} w={326}>
                    <HStack>
                     <Text  bold fontSize={15}>火辣豬豬義大利麵</Text>
                     <Text bold fontSize={15} marginLeft={140}> $280</Text>
                     </HStack>
                     <Text bold fontSize={12} color="#a5a5a5">洋蔥碎/蒜碎/蘑菇/牛番茄/豬絞肉</Text>
                    </Box>
                    <Box marginTop={5} w={326}> 
                    <HStack>
                     <Text  bold fontSize={15}>白醬海鮮義大利麵</Text>
                     <Text bold fontSize={15} marginLeft={140}> $280</Text>
                     </HStack>
                     <Text bold fontSize={12} color="#a5a5a5">洋蔥碎/蒜碎/杏鮑菇/鮮蝦/透抽/蛤蠣/綜合蔬菜</Text>
                    </Box>
                    
                    <Box marginTop={5} w={326} marginBottom={10}>
                    <HStack>
                     <Text  bold fontSize={15}>白酒蛤蠣義大利麵</Text>
                     <Text bold fontSize={15} marginLeft={140}> $290</Text>
                     </HStack>
                     <Text bold fontSize={12} color="#a5a5a5">洋蔥碎/蒜碎/杏鮑菇/小小番茄/蛤蠣</Text>
                    </Box>
                    </Center>
                </ScrollView>
           </Box>
        )
     }
   }

   return (
      <Box flex={1}
         _dark={{ bg: "#574E45" }}
         _light={{ bg: "#FEFFEF" }}>
            <ScrollView>
            <Image
                    margin="0"
                    width="100%"
                    height="230"
                    
                    
                    paddingRight={4}
                    // position= "absolute" 
                    marginTop={0}
                    
                    source={{ uri: colorMode=="light"?"https://github.com/FFF2832/finalapp/blob/master/src/images/Vector%201.png?raw=true":"https://raw.githubusercontent.com/zhiyu414/json/master/image/Vector%201%20(1).png" }}
                alt="artist"
                />
            <Image
                    margin="0"
                    width="323"
                    height="215"
                    borderRadius={7}
                    
                    paddingRight={4}
                    position= "absolute" 
                    alignSelf= 'center'
                    marginTop={3}
                    
                source={{ uri: "https://raw.githubusercontent.com/zhiyu414/json/master/image/menu1.jpg" }}
                alt="artist"
                /> 
                
         
         

        <SegmentedControlTab
            values={["主食", "甜點","飲料","套餐"]}
            tabStyle={{ 
               marginTop: 10, borderColor: colorMode == "light" ? "#FEFFEF" : "#574E45", 
               borderWidth: colorMode=="light"? 0: 4,
               backgroundColor: colorMode == "light" ? "#FEFFEF" : "#574E45" 
            }}
            firstTabStyle={{ marginLeft: 50 }}
            lastTabStyle={{ marginRight: 50 }}
            tabTextStyle={{ fontSize: 15, padding:5, color: colorMode == "light" ? "gray" : "#a5a5a5", fontWeight:"bold"}}
            activeTabStyle={{borderBottomWidth:2 ,borderBottomColor:colorMode=="light"?"#000":"#fff",
            backgroundColor:colorMode=="light"?"#FEFFEF":"#574E45"}}
            activeTabTextStyle={{  color: colorMode == "light" ? "#000" : "#fff"}}
            selectedIndex={selectedIndex}
            onTabPress={(index) => setSelectedIndex(index)}
         />
         <SegmentedContent />
         </ScrollView>
      </Box>
   );
};

export default MenuScreen;