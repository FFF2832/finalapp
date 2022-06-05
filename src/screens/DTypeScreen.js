import {
  StyleSheet,
  
  View,
  
  FlatList,

  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  clear,
  removeItem,
} from "../redux/features/cartSlice";
import { cartTotalPriceSelector } from "../redux/selectors";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, HStack ,VStack,useColorMode} from "native-base";
//import Header from component folder- this takes props
// import Header from "../components/Header";
// import Data from "../../assets/cartItems";
import { Ionicons } from "@expo/vector-icons";

const amount = 0;

// import CartContainer from "../components/CartContainer";

const CartContainer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

  const AlertItem = () => {
    Alert.alert(
      "確定要清除所有浪浪嗎?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => dispatch(clear()) },
      ],
      { cancelable: false }
    );
  };

  const renderStoreItems = ({ item }) => {
    return (
      <View style={styles.storeItem}>
        <View style={styles.storeItemImg}>
          <Image style={styles.storeItemImage} source={{ uri: item.image }} />
        </View>
        <View style={styles.storeItemInfo}>
          <Text style={styles.storeItemTitle}>{item.name}</Text>
          <Text style={styles.storeItemPrice}>
            {item.gender}
          </Text>
          <View style={styles.addToCart}>
            <View style={styles.cartItemAmount}>
              {/* <TouchableOpacity
                onPress={() => {
                  if (item.quantity === 1) {
                    dispatch(removeItem(item.id));
                    console.log("removed");
                    return;
                  } else {
                    dispatch(decrement(item.id));
                  }
                }}
              >
                <Ionicons name="md-remove" size={24} color="black" />
              </TouchableOpacity> */}
              {/* <Text style={styles.cartItemAmountText}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(increment(item.id));
                }}
              >
                <Ionicons name="md-add" size={24} color="black" />
              </TouchableOpacity> */}
            </View>
            <View style={styles.cartItemRemove}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeItem(item.id));
                }}
                style={styles.cartItemRemoveButton}
              >
                <Ionicons name="md-trash" size={15} color="black" />
                <Text>移除</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View  >
      <FlatList
        data={cart}
        renderItem={renderStoreItems}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginBottom:20
            }}
          >
            <Text style={styles.storeItemTitle}>我的浪浪</Text>
            <TouchableOpacity onPress={AlertItem}>
              <Text style={styles.storeItemSubTitle}>清除全部</Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={() => {
          return (
            <View style={styles.cartFooter}>
              <View style={styles.checkout}>
                {cart.length === 0 ? (
                  <Text style={styles.checkoutText}>目前沒有浪浪喔</Text>
                ) : (
                  <View style={styles.checkoutFull}>
                    {/* <Text style={styles.checkoutText}>
                      Total: R{totalPrice}
                    </Text> */}

                    {/* <Button
                      title="Checkout"
                      color="#ff5a5f"
                      onPress={() => {
                        // dispatch(checkout());
                      }}
                    />
                    <Button
                      onPress={() => goBack()}
                      title="Continue Shopping"
                    /> */}
                  </View>
                )}
              </View>
              <View  />
            </View>
          );
        }}
      />
    </View>
  );
};

const DTypeScreen = ({ navigation: { goBack } }) => {
  const { colorMode } = useColorMode();
  return (

    // <SafeAreaView>
      <Box flex={1}
      _dark={{ bg: "#574E45" }}
      _light={{ bg: "#FEFFEF" }}
      >
        <Image
                    margin="0"
                    width="100%"
                    height="230"
                    
                    
                    paddingRight={4}
                    position= "absolute" 
                    marginTop={0}
                    
                    source={{ uri: colorMode=="light"?"https://github.com/FFF2832/finalapp/blob/master/src/images/Vector%201.png?raw=true":"https://raw.githubusercontent.com/zhiyu414/json/master/image/Vector%201%20(1).png" }}
                alt="artist"
                />
        <CartContainer 
        
        />
        <Box  style={{  backgroundColor: "#FEFFEF" ,weight:100}}>

        </Box>
      </Box>
     
      
    // </SafeAreaView>
  );
};

export default DTypeScreen;

const styles = StyleSheet.create({
  storeItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    marginTop:10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: "#FEFFEF",
    
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    justifyContent: "center",
  },
  storeItemImg: {
    width: "30%",
    height: 120,
    borderRadius: 5,
    overflow: "hidden",
  },
  storeItemImage: {
    width: "100%",
    height: "100%",
  },
  storeItemInfo: {
    width: "70%",
    padding: 10,
  },
  storeItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop:20,
  },
  storeItemPrice: {
    fontSize: 14,
    color: "gray",
    
  },
  storeItemSubTitle:{
    fontSize: 14,
    color: "gray",
    marginTop:20,
  },
  addToCart: {
    backgroundColor: "coral",
    borderRadius: 5,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartItemAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  cartItemAmountText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItemRemove: {
    alignItems: "center",
    justifyContent: "center",
    width:227,
    backgroundColor:"#F9E6A1",
    height:30,
    borderRadius:6

    
  },
  cartItemRemoveButton: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
   
    

  },
  cartFooter: {
    justifyContent: "space-between",
  },
});