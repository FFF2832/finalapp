import React from "react";
import {SectionList ,StyleSheet}from "react-native";
import { Text, FlatList,Center,Pressable,Box} from "native-base";
import MapDetail from "./MapDetail";
import sections from "../json/type_section.json";


const MapList = () => {
  const renderSectionHeader = ({section}) => (
    
      <Center  _dark={{bg:"#4F5B57"}}>
      <Text fontSize={20} marginTop={5} marginBottom={0}  color="#4F5B57" fontWeight="bold"  _dark={{ color:"#fff"}}>
        {section.title} 
      </Text>
     
      {section.horizontal ? (
        <FlatList
          horizontal={true}
          data={section.data}
         
          renderItem={({ item }) => <MapDetail album={item} />}
          showsHorizontalScrollIndicator={false}
          // keyExtractor={ item => item.title }
          keyExtractor={ item => item.title }
        />
      ) : null}
      </Center>
      
    
    
  );
  const renderItem = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }

    return <MapDetail album={item} />
    
    
  };

  return (
  
  
    <SectionList 
     _dark={{bg:"#4F5B57"}}
    
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 0 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    
  }
  
 
});

export default MapList;