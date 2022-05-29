

import React, { Component } from 'react'; 
import { Image, ScrollView, StyleSheet, Text, Dimensions, TouchableOpacity ,ImageBackground} from 'react-native'; 


const { width, height } = Dimensions.get('window');
class LogIn extends Component  {
    constructor() {
    super();
    };

render(item, navigation) { 
  
  
  return ( 
  <ImageBackground style={styles.container} sourse={{uri:'https://raw.githubusercontent.com/zhiyu414/Imaa/main/debby-hudson-zAJcnffG8xw-unsplash.png'}}>
  <ScrollView contentContainerStyle={styles.contentContainer} 
    bounces={false} >
      <Image style={styles.img} sourse={{uri:'https://raw.githubusercontent.com/FFF2832/wkmidterm/master/src/images/Persnote.png'}}                 
        alt="logo"/>
      <Text style={styles.persnote}>Persnote</Text>  
      <Text style={styles.slogn}>
          準備開始記錄生活了嗎?在這裡可以收集你的各種興趣!
      </Text>
  
      <TouchableOpacity style={styles.btn}  onPress={() => navigation.navigate('Dtype', item)} >
          <Text style={styles.btnText}>開始 ＞</Text>
      </TouchableOpacity>
      <Pressable 
          onPress={() => navigation.navigate('LogIn', dtype)}
          >
          
          </Pressable>   
</ScrollView>
</ImageBackground>
); 

} }; 


const styles = StyleSheet.create({ 
  contentContainer: {
     width: width, height: height,backgroundColor:'#E2D5C3',
  }, 
  container:{
    width:width,height: height
  },
  persnote:{
    fontSize:48,marginLeft:39,
  },
  backgroundImage: { 
       width: width, height: height, 
  }, 
  btnOut:{ 
    alignItems:'center', 
  }, 
  btn:{ 
    width:100, height:40, backgroundColor:'#EA9C49', borderRadius:8, justifyContent:'center', alignItems:'center', 
    marginBottom:96,marginLeft:269, 
  },
  btnText:{ 
     fontSize:18, color:'#fff' ,marginLeft:10,
    }, 
  slogn:{
    fontSize:20 ,width:325, height:61,flex:1,justifyContent:'center',alignItems:'center', marginLeft:39,
  },
  img:{
    width:191,height:42,marginTop:295,
  }
});
export default LogIn;
//backgroundColor:'#E2D5C3',