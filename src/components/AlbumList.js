

import React from "react";
import { FlatList ,Box,HStack,Center,Text,useColorMode} from "native-base";
import {Pressable,Alert,View,StyleSheet} from "react-native";
import AlbumDetail from "./AlbumDetail";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LinearGradient} from 'expo-linear-gradient';
const AlbumList = ({ list, navigation }) => {
  const { colorMode } = useColorMode();
  const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} />;
  return (
    <Box  _dark={{bg:"#4F5B57"}}>
     <LinearGradient start={{x: 0, y: 0}}
          end={{x: 0, y: 0.6}}
          colors={['#F6F3EE', '#ECDFCD', '#E2D5C3']} style={styles.container}>
       
        <View _dark={{ bg: "#4F5B57" }}>
        <HStack paddingBottom={5} _dark={{ bg: "#4F5B57" }}>
    <Center bg="#F0F0F0" width="136" height="58" marginLeft={10} marginTop={10}  borderRadius={7} _dark={{bg:"#000"} }  shadow={2} >
    <Pressable onPress={() => Alert.alert("新增資料夾")}>   
         <HStack marginRight={10}>
              
         <Box  marginRight={2}>
          <MaterialCommunityIcons
          name={'plus'}
          color={colorMode == 'light' ? '#4F5B57' : 'white'}
          // color={colorMode == 'light' ? '#4F5B57' : 'white'}
          size={25}
          // onPress={() => Alert.alert("新增項目")}
          marginLeft={40} 
          // color="#4F5B57"
         
          />
          </Box>
           <Text   marginTop={0.5}   >新增</Text>
          </HStack>
          </Pressable>
    </Center>
    <Center bg="#F0F0F0" width="136" height="58" marginLeft={10} marginTop={10}  borderRadius={7} _dark={{bg:"#000"}}  shadow={2}>
    <HStack marginRight={5}>
                  
         <Box  marginRight={2}>
          <MaterialCommunityIcons
          name={'cards-heart'}
          color={colorMode == 'light' ? '#4F5B57' : 'white'}
          size={21}
          // onPress={() => Alert.alert("新增項目")}
          marginLeft={0} 
         
         
          />
           </Box>
           <Text   marginTop={0}    >所有收藏</Text>
          </HStack>
    </Center>
    </HStack>
    <FlatList
    _dark={{ bg: "#4F5B57" }}
    _light={{}}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      contentContainerStyle={{paddingBottom:500}}
    />  
        </View>
      </LinearGradient>
    
     </Box>
  );  
}

export default AlbumList;
const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    // width: 390,
    // height: 844,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
 
});
