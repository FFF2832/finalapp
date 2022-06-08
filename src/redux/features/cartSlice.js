// import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch, useSelector } from "react-redux";
// // import React, { useState } from "react";
// const initialState = [];

// const cartSlice = createSlice({

//   name: "cart",
//   initialState,
//   reducers: {
    
//     addToCart(state, { payload }) {

//       //   console.log(payload);
//       //uid is the unique id of the item
//       const { id } = payload;
      
     
//       const find = state.find((item) => item.id === id);
//       if (find) {
//         return state.map((item) =>
//           item.id === id
//             ? {
//                 ...item,
//                 quantity: item.quantity + 1,
//                 //state:0
                
//               }
//             : item
//         );
//       } else {
//         state.push({
//           ...payload,
//           quantity: 1,
//          // state:1
//         });
//       }
      

//     },
//     increment(state, { payload }) {
//       return state.map((item) =>
//         item.id === payload
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item
//       );
//     },
//     decrement(state, { payload }) {
//       return state.map((item) =>
//         item.id === payload
//           ? {
//               ...item,
//               quantity: item.quantity - 1,
//             }
//           : item
//       );
//     },
//     removeItem: (state, action) => {
      
//       const itemId = action.payload;
      
//       return (state.filter((item) => item.id !== itemId)
//       )
      
      
//     },
//     clear(state) {
//       return [];
//     },
//       updateItem: (state) => {
//         // const itemId = action.payload;
//         const allAnimeCopy = [...state];
//         for (let i = 0; i < state.length; i += 1) {
//           if (action.payload.item.id  === allAnimeCopy[i].id) {
//             allAnimeCopy[i] = action.payload.item;
//           }
//         }
  
//         return allAnimeCopy;
     
      
//     }
    
//   },
// });

// export const { addToCart, increment, decrement, removeItem, clear } =
//   cartSlice.actions;
// const cartReducer = cartSlice.reducer;

// export default cartReducer;
import { createSlice } from "@reduxjs/toolkit";
// import React, { useState } from "react";
const initialState = [];
// const allAnimeCopy = [...state];
const statearr=[0,0,0,0];
const cartSlice = createSlice({
  
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {

      //   console.log(payload);
      //uid is the unique id of the item
      const { id } = payload;
      
     
      const find = state.find((item) => item.id === id);
      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
                state: 0,

                
              }
            : item
        );
      } else {
        state.push({
          ...payload,
          quantity: 1,
          state:1
        });
      }
      

    },
    increment(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
    },
    removeItem: (state, action) => {
      
      const itemId = action.payload;
      
      return state.filter((item) => item.id !== itemId);
    },
    clear(state) {
      return [];
    },
      updateItem: (state , action) => {
       
        // const itemId = action.payload;
        // for (let i = 0; i < state.length; i += 1) {
        //   if ( itemId === allAnimeCopy[i].id) {
        //     allAnimeCopy[i] = itemId;
        //   }
        // }
  
        // return allAnimeCopy;
        state= updateItem();
       return state;
     
      
    }
  },
});

export const { addToCart, increment, decrement, removeItem,updateItem, clear } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;