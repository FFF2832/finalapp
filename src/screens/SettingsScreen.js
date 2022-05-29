import React from "react";
import { Box ,Image,Center,Text,HStack} from "native-base";
import ListItem from "../components/ListItem"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from "react-native-vector-icons/AntDesign";
const SettingsScreen = ({ navigation }) => {
    return (
        <Box 
            flex={1}
            _dark={{ bg: "#4F5B57" }}
            _light={{ bg: "#E2D5C3" }}        
        >
            <Center>
            <Image
                 margin="1"
                 width="876"
                 height="254"
                 padding="2"
                 borderRadius="7"
                 paddingRight={4}
                 position= "absolute"  //style={{elevation:2}}
                marginTop={0}
              source={{ uri: "https://images.pexels.com/photos/4719642/pexels-photo-4719642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
              alt="artist"
            />
                <Image
                 margin="1"
                 width="140"
                 height="140"
                 padding="2"
                 borderRadius="7"
                 paddingRight={4}
            //   flex="1"
            //   justifyContent="center"
                marginTop={19}
              source={{ uri: "https://github.com/FFF2832/wkmidterm/blob/master/src/images/Group%2054.png?raw=true" }}
              alt="artist"
            />
            <Text color="#fff" fontSize={20} fontWeight="bold" _dark={{color:"#fff"}}>Jennifer Lin</Text>
            <Text color="#fff" fontSize={12} fontWeight="bold" _dark={{color:"#fff"}}>簡介:落在一個人一生中的雪，我們不能全部看見。</Text>
            </Center>
            <Center>
            {/* <HStack  marginTop={60}>
                <Text color="#4F5B57" fontSize={12} fontWeight="bold" marginRight={3} _dark={{color:"#fff"}}>已收藏次數</Text>
                <Text color="#4F5B57" fontSize={12} fontWeight="bold"  marginRight={3} _dark={{color:"#fff"}}>已寫文章數</Text>
                <Text color="#4F5B57" fontSize={12} fontWeight="bold"  marginRight={2} _dark={{color:"#fff"}}>已加入時間</Text>
            </HStack>
            <HStack> 
                <Text color="#4F5B57" fontSize={12} fontWeight="bold"  _dark={{color:"#fff"}}>5</Text>
                <Text color="#4F5B57" fontSize={12} fontWeight="bold"   _dark={{color:"#fff"}}>5</Text>
                <Text color="#4F5B57" fontSize={12} fontWeight="bold"   _dark={{color:"#fff"}}>5</Text>
            </HStack> */}

            <HStack  marginTop={10}>
            <Center flexDirection="column" marginRight={3}>
            <Text color="#4F5B57" fontSize={12} fontWeight="bold"  _dark={{color:"#fff"}}>已收藏次數</Text>
            <Text color="#4F5B57" fontSize={15} fontWeight="bold"  _dark={{color:"#fff"}}>5</Text>
            </Center>
            <Box w={0.5} h={10} bg="#4F5B57" marginLeft={3} marginRight={5} _dark={{bg:"#fff"}}></Box>
            <Center flexDirection="column" marginRight={3}>
            <Text color="#4F5B57" fontSize={12} fontWeight="bold"  _dark={{color:"#fff"}}>已寫文章數</Text>
            <Text color="#4F5B57" fontSize={15} fontWeight="bold"  _dark={{color:"#fff"}}>5</Text>
            </Center>
            <Box w={0.5} h={10} bg="#4F5B57" marginLeft={3} marginRight={5} _dark={{bg:"#fff"}}></Box>
            <Center flexDirection="column" >
            <Text color="#4F5B57" fontSize={12} fontWeight="bold"  _dark={{color:"#fff"}}>已加入時間</Text>
            <Text color="#4F5B57" fontSize={15} fontWeight="bold"  _dark={{color:"#fff"}}>5</Text>
            </Center>
            </HStack>

            </Center>
            <Box 
                mt="12" borderBottomWidth={1} borderColor="#E2D5C3"
                _dark={{ bg:"#4F5B57", borderColor: '#4F5B57', borderButtomWidth: 0.6 }}
            >

                <ListItem title="主題設定"   navigation={navigation} destination="DisplaySetting" />
                {/* <ListItem title="Account" navigation={navigation} destination="AccountSetting"/> */}
                <HStack justifyContent="flex-start" marginTop={3}>
                <Center width="30" height="30"   position= "absolute"  style={{elevation:2}} flex="1" borderRadius="9" marginTop={3} marginLeft={5} 
                  _dark={{bg: "#4F5B57" ,borderwidth:1,borderColor:"#fff"}} _light={{bg:"#4F5B57"}}> 
                <MaterialCommunityIcons name="history" color="#fff"  size={26} />
                </Center>

                <Text fontSize={15} marginLeft={60} marginTop={4}>歷史紀錄</Text>
                
                </HStack>
                <HStack justifyContent="flex-start" marginTop={7}>
                <Center width="30" height="30"   position= "absolute"  style={{elevation:2}} flex="1" borderRadius="9" marginTop={3} marginLeft={5} 
                _dark={{bg: "#4F5B57"}} _light={{bg:"#4F5B57"}}> 
                <MaterialCommunityIcons name="file-account-outline" color="#fff"  size={26} />
                </Center>

                <Text fontSize={15} marginLeft={60} marginTop={4}>個人資料</Text>
                
                </HStack>
            </Box>            
        </Box>

    );
};

export default SettingsScreen;
