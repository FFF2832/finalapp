

import React from "react";
import {SectionList ,StyleSheet}from "react-native";
import { Text, FlatList,Center,Pressable,Box} from "native-base";
import HomeDetail from "./HomeDetail";
import sections from "../json/type_section.json";
import {LinearGradient} from 'expo-linear-gradient';

const Homelist = () => {
  const renderSectionHeader = ({section}) => (
    
    
     <LinearGradient start={{x: 0, y: 0}}
    end={{x: 0, y: 1}}
    colors={['#F6F3EE', '#ECDFCD', '#E2D5C3']} style={styles.container}>
      <Center  _dark={{bg:"#4F5B57"}}>
      <Text fontSize={20} marginTop={5} marginBottom={0}  color="#4F5B57" fontWeight="bold"  _dark={{ color:"#fff"}}>
        {section.title} 
      </Text>
      {/* <Box width={277} height={0.5} bgColor="#4F5B57" marginBottom={10} marginLeft={60}></Box>   */}
      {section.horizontal ? (
        <FlatList
          horizontal={true}
          data={section.data}
         
          renderItem={({ item }) => <HomeDetail album={item} />}
          showsHorizontalScrollIndicator={false}
          // keyExtractor={ item => item.title }
          keyExtractor={ item => item.title }
        />
      ) : null}
      </Center>
      </LinearGradient>
    
    
  );
  const renderItem = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }

    return <HomeDetail album={item} />
    
    
  };

  return (
  
  <LinearGradient start={{x: 0, y: 0}}
    end={{x: 0, y: 1}}
    colors={['#F6F3EE', '#ECDFCD', '#E2D5C3']} style={styles.container}>
    <SectionList 
     _dark={{bg:"#4F5B57"}}
    //  _light={{bg:"#E2D5C3"}}
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 0 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  </LinearGradient>
  );
};

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

export default Homelist;


