import React from "react";
import { Box, FlatList ,Image,Center} from "native-base";
import DTypeDetail from "./DTypeDetail";

const DTypeList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <DTypeDetail dtype={item} navigation={navigation} />;
  return (
    <Box bg="#E2D5C3">
           <Box>
          <Image
            
            width="413"
            height="191"
            source={{ uri: "https://github.com/FFF2832/wkmidterm/blob/master/src/images/debby-hudson-zAJcnffG8xw-unsplash.png?raw=true" }}
            alt="1"
            />
            <Center 
            width="200" height="10" bg="#E2D5C3" position= "absolute" style={{elevation:2}}   marginTop={88} marginLeft={90}
            >
            
            </Center>
            <Image
             width="172"
             height="54"
             flex="1"
             position= "absolute" style={{elevation:3}}
             marginTop={70}
             marginLeft={100}
             marginBack={2}
            source={{uri:"https://github.com/FFF2832/wkmidterm/blob/master/assets/logo.png?raw=true"}}
            alt="1"
            />
           
    </Box>
    <FlatList
        
    _dark={{ bg: "#4F5B57"  }}
    _light={{ bg: "#E2D5C3"  }}
    
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      paddingBottom={10}
    />  
    </Box>
      
  );  
}

export default DTypeList;