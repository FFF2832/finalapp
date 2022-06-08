import React from "react";
import { Box ,Image,Center,Text,HStack, useColorMode} from "native-base";
import { Linking,Pressable,ScrollView } from 'react-native';

import ListItem from "../components/ListItem"
import MapList from "../components/MapList";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from "react-native-vector-icons/AntDesign";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
const SettingsScreen = ({ navigation }) => {
    const { colorMode } = useColorMode();
    return (
       
        <Box 
            flex={1}
            _dark={{ bg: "#574E45" }}
            _light={{ bg: "#FEFFEF" }}    
            
        >
            <ScrollView  >
                <Center>
                
                <Image
                    margin="0"
                    width="100%"
                    height="100%"
                    
                    
                    paddingRight={4}
                    position= "absolute"
                    marginTop={0}
                   
                    source={{ uri: colorMode=="light"?"https://github.com/FFF2832/finalapp/blob/master/src/images/Vector%201.png?raw=true":"https://raw.githubusercontent.com/zhiyu414/json/master/image/Vector%201%20(1).png" }}
                alt="artist"
                />
            
                
                <Image
                    margin="1"
                    width="323"
                    height="215"
                    padding="2"
                    borderRadius="7"
                    paddingRight={4}
                    marginTop={3}
                    
                    
                source={{ uri: "https://github.com/FFF2832/finalapp/blob/master/src/images/13055470_799656300178757_20778114455408489_n.png?raw=true" }}
                alt="artist"
                
                />
            
        
        </Center>
        <HStack  marginLeft={53} marginTop={5}>
            <Box style={{ shadowColor: '#000000',
            shadowOpacity: 0.4,
            shadowRadius: 1,
            shadowOffset: {
            height: 1,
            width: 0,
            } }}>
                <Pressable onPress={() => Linking.openURL("https://www.facebook.com/langlangdontcry")}>
                    <Image
                        margin="1"
                        width="57"
                        height="57"
                        style={{elevation:2}}
                        borderRadius="7"
                        marginRight={58}
                        marginTop={0}
                       
                        
                    source={{ uri: "https://github.com/zhiyu414/json/blob/master/image/%E6%8F%92%E5%9C%96.png?raw=true" }}
                    alt="artist"
                    />
                </Pressable>
            </Box>
            <Box style={{ shadowColor: '#000000',
            shadowOpacity: 0.4,
            shadowRadius: 1,
            shadowOffset: {
            height: 1,
            width: 0,
            } }}>
            <Pressable onPress={() => Linking.openURL("https://www.instagram.com/langlangdontcry/")}>
                <Image
                    margin="1"
                    width="57"
                    height="57"
                    style={{elevation:2}}
                    borderRadius="7"
                    marginRight={58}
                    marginTop={0}
                    
                    
                source={{ uri: "https://github.com/zhiyu414/json/blob/master/image/%E6%8F%92%E5%9C%962.png?raw=true" }}
                alt="artist"
                />
                </Pressable>
            </Box>
            <Box style={{ shadowColor: '#000000',
            shadowOpacity: 0.4,
            shadowRadius: 1,
            shadowOffset: {
            height: 1,
            width: 0,
            } }}>
            <Pressable onPress={() => Linking.openURL("https://www.youtube.com/channel/UCcPPwWthX9TSx6HZ0h8mVKg")}>
                <Image
                    margin="1"
                    width="57"
                    height="57"
                    style={{elevation:2}}
                    borderRadius="7"
                    
                    marginTop={0}
                    
                    
                source={{ uri: "https://github.com/zhiyu414/json/blob/master/image/%E6%8F%92%E5%9C%963.png?raw=true" }}
                alt="artist"
                />
            </Pressable>
            </Box>
        </HStack>

        <Box 
            marginTop={5}
            _dark={{ bg:"#574E45"}}
        >
            <Pressable onPress={() => Linking.openURL("https://shop.langlangdontcry.com.tw/")}>
            <Box w={341} h={67}  _dark={{ bg: "#35322E" }}
        _light={{ bg: "white" }}borderRadius={4} alignSelf="center" style={{elevation:2,
            shadowColor: '#000000',
            shadowOpacity: 0.4,
            shadowRadius: 1,
            shadowOffset: {
            height: 1,
            width: 0,
            } 
        
        }}>
                <HStack justifyContent="flex-start" marginTop={0}>
                <Center width="54" height="54"   position= "absolute"   borderRadius="9" marginTop={2} marginLeft={2} 
                _dark={{bg: "#BCB9A7" ,borderwidth:1,borderColor:"#fff"}} _light={{bg:"#F1E9C3"}}> 
                <MaterialCommunityIcons name="storefront-outline" color="#000000"  size={32} />
                </Center>

                <Text fontSize={15} marginLeft={75} marginTop={6}>線上商店</Text>
            
            </HStack>
            </Box>
            </Pressable>
            <Pressable onPress={() => Linking.openURL("http://www.langlangdontcry.com.tw/story.php")}>
            <Box w={341} h={67}  _dark={{ bg: "#35322E" }}
        _light={{ bg: "white" }} borderRadius={4} alignSelf="center" style={{elevation:2,shadowColor: '#000000',
        shadowOpacity: 0.4, shadowRadius: 1, shadowOffset: { height: 1, width: 0,} }} marginTop={30}>
                <HStack justifyContent="flex-start" marginTop={0}>
                <Center width="54" height="54"   position= "absolute"   borderRadius="9" marginTop={2} marginLeft={2} 
                _dark={{bg: "#BCB9A7" ,borderwidth:1,borderColor:"#fff"}} _light={{bg:"#F1E9C3"}}> 
                <MaterialCommunityIcons name="dog-side" color="#000000"  size={32} />
                </Center>

                <Text fontSize={15} marginLeft={75} marginTop={6}>浪浪的事</Text>
            
            </HStack>
            </Box>
            </Pressable>
            <Pressable onPress={() => Linking.openURL("https://www.youtube.com/channel/UCcPPwWthX9TSx6HZ0h8mVKg")}>
            <Box w={341} h={67}  _dark={{ bg: "#35322E" }}
        _light={{ bg: "white" }} borderRadius={4} alignSelf="center" style={{elevation:2,shadowColor: '#000000',
        shadowOpacity: 0.4, shadowRadius: 1, shadowOffset: { height: 1, width: 0,}}} marginTop={30}>
                <HStack justifyContent="flex-start" marginTop={0}>
                <Center width="54" height="54"   position= "absolute"   borderRadius="9" marginTop={2} marginLeft={2} 
                _dark={{bg: "#BCB9A7" ,borderwidth:1,borderColor:"#fff"}} _light={{bg:"#F1E9C3"}}> 
                <MaterialCommunityIcons name="text-box-check" color="#000000"  size={32} />
                </Center>

                <Text fontSize={15} marginLeft={75} marginTop={6}>領養條件</Text>
            
            </HStack>
            </Box>
            </Pressable>
            <ListItem  title="切換主題"   navigation={navigation} destination="DisplaySetting" />
        </Box> 
        <Pressable>
        < MapList 
            list={albumData.albumList}
                navigation={navigation}
    
                    /> 
        </Pressable>
            
                
        
            </ScrollView> 
            
        </Box>
        

    );
};

export default SettingsScreen;