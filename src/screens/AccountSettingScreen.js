import React, { useState } from 'react';
import { TouchableOpacity } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import ModalDropdown from 'react-native-modal-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AlbumScreen from "./AlbumScreen"
import CatScreen from "./CatScreen"
import { Box, Text, Center, useColorMode ,Image, HStack} from "native-base";
import AlbumList from "../components/AlbumList"
import AlbumDetail from "../components/AlbumDetail"
const AccountSettingScreen = ({navigation}) => {
   const renderItem = ({ item }) => <AlbumDetail dtype={item} navigation={navigation} />;
      const [selectedIndex, setSelectedIndex] = useState(0);
      const { colorMode } = useColorMode();

      const SegmentedContent = () => {
         if (selectedIndex == 1) {
            return (
               <Box flex={1}
                  _dark={{ bg: "blueGray.900" }}
                  _light={{ bg: "blueGray.50" }}>
                  <CatScreen
                   navigation={navigation}
                  />
                    
                  
               </Box>
            )
         } else {
            return (
               <Box flex={1}
                  _dark={{ bg: "blueGray.900" }}
                  _light={{ bg: "blueGray.50" }}>
                  <AlbumScreen
                   navigation={navigation}
                  />
                    
               </Box>
            )
         }
      }

      return (
         <Box flex={1}
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "#FEFFEF" }}>
               <Image
                     margin="0"
                     width="100%"
                     height="230"
                     
                     
                     paddingRight={4}
                     position= "absolute" 
                     marginTop={0}
                     
                  source={{ uri: "https://github.com/FFF2832/finalapp/blob/master/src/images/Vector%201.png?raw=true" }}
                  alt="artist"
                  />
               <Image
                     margin="0"
                     width="476"
                     height="185"
                     
                     
                     paddingRight={4}
                     //   position= "absolute" 
                     alignSelf= 'center'
                     marginTop={6}
                     
                  source={{ uri: "https://raw.githubusercontent.com/zhiyu414/json/master/image/%E6%B5%AA%E6%B5%AA%E6%88%90%E5%93%A1%E7%84%A1%E8%83%8C%E6%99%AF.png" }}
                  alt="artist"
                  /> 
                  <TouchableOpacity>
            <ModalDropdown options={['台北店','台中店', '台南店']}
                           style={{borderWidth:2,borderColor:'#574E45',borderRadius:5 ,width:86,height:40,marginLeft:25,marginTop:30}}
                           TextStyle={{color:"#574E45" ,fontSize:15, fontWeight:'bold',marginTop:7,marginLeft:10}}
                           defaultValue='台北店 ▼'
                           defaultTextStyle={{color:"#574E45" ,fontSize:15, fontWeight:'bold',marginTop:7,marginLeft:10}}
                           dropdownStyle={{borderWidth:2,borderColor:'#574E45',borderRadius:5 ,width:86,height:135,marginTop:8,marginLeft:-2}}
                           dropdownTextStyle={{color:"#574E45" ,fontSize:15, fontWeight:'bold',marginTop:2,marginLeft:10}}
                           dropdownTextProps={{color:"#574E45" ,fontSize:15, fontWeight:'bold',marginTop:6,marginLeft:10}}
            >
               {/* <Box position="absolute" top={1} right={1}>
               <MaterialCommunityIcons name="menu-down" color="#574E45" size={25} />
               </Box> */}
               
               
            </ModalDropdown>
            </TouchableOpacity>
            

         <SegmentedControlTab
               values={["狗狗", "貓貓"]}
               tabStyle={{ 
                  marginTop: 10, borderColor: colorMode == "light" ? "#FEFFEF" : "black", 
                  borderWidth: colorMode=="light"? 0: 4,
                  backgroundColor: colorMode == "light" ? "#FEFFEF" : "black" 
               }}
               firstTabStyle={{ marginLeft: 100 }}
               lastTabStyle={{ marginRight: 100 }}
               tabTextStyle={{ fontSize: 15, padding:3, color: colorMode == "light" ? "gray" : "#88898B", }}
               activeTabStyle={{borderBottomWidth:2 ,borderBottomColor:"#000",backgroundColor:"#FEFFEF"}}
               activeTabTextStyle={{ color: "#000" }}
               selectedIndex={selectedIndex}
               onTabPress={(index) => setSelectedIndex(index)}
            />
            <SegmentedContent />
         </Box>
      );
};

export default AccountSettingScreen;