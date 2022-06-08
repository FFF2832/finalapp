
import 'react-native-gesture-handler';
import React,{useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View,Text,Button,Image,StyleSheet} from 'react-native';
import { NativeBaseProvider,AspectRatio } from 'native-base';
import { Provider } from "react-redux";
import store from "./src/redux/store";
import SplashScreen from './src/screens/SplashScreen';
import Navigation from './src/navigation';
import AnimatedSplash from "react-native-animated-splash-screen";
import AppIntroSlider from 'react-native-app-intro-slider';
const App = () => {
  const [showRealApp,setshowRealApp]=useState(false)
  const onDone = () => {
    setshowRealApp(true)
    //this.setState({ showRealApp: true });
  }
  const onSkip = () => {
    setshowRealApp(true)
    
  }
  const  renderItem =({item})=> {
    return (
      <View style={{flex:1,alignContent:"center",justifyContent:"center" ,backgroundColor:'#E2D5C3'
      }}>
        {/* <Image source={ item.logo1 }  style={styles.introLogoStyle}/> */}
        <Text   style={styles.introTextStyle}>{item.title}</Text>
        
        <Image source={ item.image }  style={styles.introImageStyle}/>
       
       
        
        
        <Text >{item.text}</Text>
      </View>
    );
  }
  return (
    <>
    {
      showRealApp?(
        <Provider store={store}>
              <NativeBaseProvider>
              {/* <AnimatedSplash
              translucent={true}
              isLoaded={this.state.isLoaded}
              logoImage={require("./assets/logo.png")}
              backgroundColor={"#262626"}
              logoHeight={150}
              logoWidth={150}
            >
            
             </AnimatedSplash> */}
                {/* <Intro/> */}
                  <Navigation />
              </NativeBaseProvider>
        </Provider>
        
        // <SafeAreaProvider>
        //     <View flex={1}>
              
        //        <NativeBaseProvider>
          
        //      {/* <Intro/> */}
        //        <Navigation />
        //    </NativeBaseProvider>
     
                
        //     </View>

        // </SafeAreaProvider>
      ):(
       
        < AppIntroSlider
        data={slides}
        renderItem ={renderItem }
        onDone={onDone}
        onSkip={onSkip}
        showSkipButton={true}
        bottomButton
        />
        
      )
    }
    </>
  );
}

export default App;
const slides = [
  {
    key: 's1',
    text: '',
    title: '',
    image: {
      uri:
        
        'https://github.com/zhiyu414/json/blob/master/image/intro1.png?raw=true',
    },
    logo1: {
      uri:
        'https://github.com/FFF2832/wkmidterm/blob/master/assets/logo.png?raw=true',
    },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: '',
    text: '',
    image: {
      uri:
        
      'https://github.com/zhiyu414/json/blob/master/image/intro2.png?raw=true',
    },
    logo1: {
      uri:
        'https://github.com/FFF2832/wkmidterm/blob/master/assets/logo.png?raw=true',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: '',
    text: '',
    image: {
      uri:
        
      'https://github.com/zhiyu414/json/blob/master/image/intro3.png?raw=true',
    },
    logo1: {
      uri:
        'https://github.com/FFF2832/wkmidterm/blob/master/assets/logo.png?raw=true',
    },
    backgroundColor: '#22bcb5',
  },
  // {
  //   key: 's4',
  //   title: 'Best Deals',
  //   text: ' Best Deals on all our services',
  //   image: {
  //     uri:
  //       'https://raw.githubusercontent.com/tranhonghan/images/main/intro_best_deals.png',
  //   },
  //   backgroundColor: '#3395ff',
  // },
  // {
  //   key: 's5',
  //   title: 'Bus Booking',
  //   text: 'Enjoy Travelling on Bus with flat 100% off',
  //   image: {
  //     uri:
  //       'https://raw.githubusercontent.com/tranhonghan/images/main/intro_bus_ticket_booking.png',
  //   },
  //   backgroundColor: '#f6437b',
  // },
  
];
const styles= StyleSheet.create({
  introImageStyle:{
      width:390,
      height:840,
     marginLeft:0,
     position: "absolute" ,
     zIndex: 1,
     
  },
  introTextStyle:{
      fontSize:20,
      elevation: 3,
      color:"#4F5B57",
      marginTop:100,
      marginLeft:15,
      zIndex: 2,

  },
  introLogoStyle:{
    width:195,
    height:60,
    zIndex: 2,
    marginLeft:15,
  }

})