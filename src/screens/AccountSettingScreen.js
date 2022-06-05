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
   const AccountSettingScreen = ({navigation}) => {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const { colorMode } = useColorMode();
      
   const SegmentedContent = () => {
      if (selectedIndex == 1) {
         return (
            <Box flex={1}
               _dark={{ bg: "#574E45" }}
               _light={{ bg: "#FEFFEF" }}>
               <CatScreen navigation={navigation}/>
            </Box>
         )
      } else {
         return (
            <Box flex={1}
               _dark={{ bg: "#574E45" }}
               _light={{ bg: "#FEFFEF" }}>
                <AlbumScreen navigation={navigation}/>
            </Box>
         )
      }
   }

   return (
      <Box flex={1}
         _dark={{ bg: "#574E45"}}
         _light={{ bg: "#FEFFEF" }}>
      <ScrollView>
         
            <Image
               margin="0"
               width="100%"
               height="230"
               paddingRight={4}
               position= "absolute" 
               marginTop={0}
               source={{ uri: colorMode=="light"?"https://github.com/FFF2832/finalapp/blob/master/src/images/Vector%201.png?raw=true":"https://raw.githubusercontent.com/zhiyu414/json/master/image/Vector%201%20(1).png" }}
               alt="artist"
            />
            {/* <Image
            margin="0"
            width="100%"
            height="230"
            paddingRight={4}
            position= "absolute" 
            marginTop={0}
            source={{ uri: "https://github.com/FFF2832/finalapp/blob/master/src/images/Vector%201.png?raw=true" }}
            alt="artist"
         /> */}
            <Image
               margin="0"
               width="476"
               height="185"paddingRight={4}
               alignSelf= 'center'
               marginTop={6}
               source={{ uri: "https://raw.githubusercontent.com/zhiyu414/json/master/image/%E6%B5%AA%E6%B5%AA%E6%88%90%E5%93%A1%E7%84%A1%E8%83%8C%E6%99%AF.png" }}
                alt="artist"
            /> 
               
         <ModalDropdown options={['台北店','台中店', '台南店']}
                        style={{borderWidth:2,borderColor: colorMode == "light" ? "#574E45" : "#fff",backgroundColor: colorMode == "light" ? "#F9E6A1" : "#574E45",borderRadius:5 ,width:86,height:40,alignSelf:"center",marginTop:-40}}
                        TextStyle={{color:colorMode == "light" ? "#574E45" : "#fff" ,fontSize:15, fontWeight:'bold',marginTop:7,marginLeft:10}}
                        defaultValue='台北店 ▼'
                        defaultTextStyle={{color:colorMode == "light" ? "#574E45" : "#fff" ,fontSize:15, fontWeight:'bold',marginTop:7,marginLeft:10}}
                        dropdownStyle={{borderWidth:2,borderColor: colorMode == "light" ? "#574E45" : "#fff",backgroundColor: colorMode == "light" ? "#fff" : "#35322e",borderRadius:5 ,width:86,height:135,marginTop:8,marginLeft:-2}}
                        dropdownTextStyle={{color:colorMode == "light" ? "#574E45" : "#fff" ,fontSize:15, fontWeight:'bold',marginTop:2,marginLeft:10,backgroundColor: colorMode == "light" ? "#fff" : "#35322e"}}
                        dropdownTextProps={{color:colorMode == "light" ? "#574E45" : "#fff" ,fontSize:15, fontWeight:'bold',marginTop:6,marginLeft:10}}
                       
         >              
  
            
            
         </ModalDropdown>
         
         

        <SegmentedControlTab
            values={["狗狗", "貓貓"]}
            tabStyle={{ 
               marginTop: 21, borderColor: colorMode == "light" ? "#FEFFEF" : "#574E45", 
               borderWidth: colorMode=="light"? 0: 4,
               backgroundColor: colorMode == "light" ? "#FEFFEF" : "#574E45" 
            }}
            firstTabStyle={{ marginLeft: 100 }}
            lastTabStyle={{ marginRight: 100 }}
            tabTextStyle={{ fontSize: 15, padding:3, color: colorMode == "light" ? "gray" : "#a5a5a5", }}
            activeTabStyle={{borderBottomWidth:2 ,borderBottomColor:colorMode=="light"?"#000":"#fff",backgroundColor:colorMode=="light"?"#FEFFEF":"#574E45"}}
            activeTabTextStyle={{ color: colorMode == "light" ? "#000" : "#fff" }}
            selectedIndex={selectedIndex}
            onTabPress={(index) => setSelectedIndex(index)}
         />
         <SegmentedContent />
         </ScrollView>
      </Box>
   );
};

export default AccountSettingScreen;