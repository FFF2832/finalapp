import React from "react";
import { Box ,Image,Center,Text,HStack} from "native-base";
import { Linking,Pressable,ScrollView } from 'react-native';

import ListItem from "../components/ListItem"
import MapList from "../components/MapList";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from "react-native-vector-icons/AntDesign";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
const SettingsScreen = ({ navigation }) => {
    return (
       
        <Box 
            flex={1}
            _dark={{ bg: "#4F5B57" }}
            _light={{ bg: "#FEFFEF" }}        
        >
            <ScrollView>
                <Center>
                
                <Image
                    margin="0"
                    width="390"
                    height="215"
                    
                    
                    paddingRight={4}
                    position= "absolute" style={{elevation:2}}
                    marginTop={0}
                    
                source={{ uri: "https://github.com/FFF2832/finalapp/blob/master/src/images/Vector%201.png?raw=true" }}
                alt="artist"
                />
            
                
                <Image
                    margin="1"
                    width="323"
                    height="215"
                    padding="2"
                    borderRadius="7"
                    paddingRight={4}
                    marginTop={0}
                    
                    
                source={{ uri: "https://github.com/FFF2832/finalapp/blob/master/src/images/13055470_799656300178757_20778114455408489_n.png?raw=true" }}
                alt="artist"
                
                />
            
        
        </Center>
        <HStack  marginLeft={10}>
            
                <Image
                    margin="1"
                    width="20"
                    height="20"
                    padding="2"
                    borderRadius="7"
                    paddingRight={4}
                    marginTop={0}
                    marginLeft={5}
                    
                source={{ uri: "https://github.com/zhiyu414/json/blob/master/image/%E6%8F%92%E5%9C%96.png?raw=true" }}
                alt="artist"
                />
                <Image
                    margin="1"
                    width="20"
                    height="20"
                    padding="2"
                    borderRadius="7"
                    paddingRight={4}
                    marginTop={0}
                    marginLeft={5}
                    
                source={{ uri: "https://github.com/zhiyu414/json/blob/master/image/%E6%8F%92%E5%9C%962.png?raw=true" }}
                alt="artist"
                />
                <Image
                    margin="1"
                    width="20"
                    height="20"
                    padding="2"
                    borderRadius="7"
                    paddingRight={4}
                    marginTop={0}
                    marginLeft={5}
                    
                source={{ uri: "https://github.com/zhiyu414/json/blob/master/image/%E6%8F%92%E5%9C%963.png?raw=true" }}
                alt="artist"
                />
        </HStack>
        <Box 
            mt="12" borderBottomWidth={1} borderColor="#FEFFEF"
            _dark={{ bg:"#4F5B57", borderColor: '#4F5B57', borderButtomWidth: 0.6 }}
        >
                <HStack justifyContent="flex-start" marginTop={3}>
                <Center width="30" height="30"   position= "absolute"  style={{elevation:2}} flex="1" borderRadius="9" marginTop={3} marginLeft={5} 
                _dark={{bg: "#4F5B57" ,borderwidth:1,borderColor:"#fff"}} _light={{bg:"#F1E9C3"}}> 
                <MaterialCommunityIcons name="storefront-outline" color="#000000"  size={26} />
                </Center>

                <Text fontSize={15} marginLeft={60} marginTop={4}>線上商店</Text>
            
            </HStack>
            
            
            <HStack justifyContent="flex-start" marginTop={3}>
                <Center width="30" height="30"   position= "absolute"  style={{elevation:2}} flex="1" borderRadius="9" marginTop={3} marginLeft={5} 
                _dark={{bg: "#4F5B57" ,borderwidth:1,borderColor:"#fff"}} _light={{bg:"#F1E9C3"}}> 
                <MaterialCommunityIcons name="dog-side" color="#000000"  size={26} />
                </Center>

                <Text fontSize={15} marginLeft={60} marginTop={3}>浪浪的事</Text>
            
            </HStack>
            <HStack justifyContent="flex-start" marginTop={7}>
                <Center width="30" height="30"   position= "absolute"  style={{elevation:2}} flex="1" borderRadius="9" marginTop={3} marginLeft={5} 
                _dark={{bg: "#4F5B57"}} _light={{bg:"#F1E9C3"}}> 
                <MaterialCommunityIcons name="text-box-check" color="#000000"  size={26} />
                </Center>

                <Text fontSize={15} marginLeft={60} marginTop={4}>領養條件</Text>
            
            </HStack>
            <ListItem  title="切換主題"   navigation={navigation} destination="DisplaySetting" />
        </Box>          
        < MapList 
            list={albumData.albumList}
                navigation={navigation}
                marginTop={0}
            bg="#FEFFEF"
    
        /> 
            </ScrollView> 
            
        </Box>
        

    );
};

export default SettingsScreen;
