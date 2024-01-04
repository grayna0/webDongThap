import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../hook/useStorage";
import setToastMessage from "../../compoents/setToastMessage";


const {setItemStorage} =useLocalStorage()
const initialState :any={
    listItem:[],
    totalPrice:0
}

export const cartSlice = createSlice(
    {
        name :"cart",
        initialState,
        reducers:{
            addToCart(state, action){
                const checkItemExits = state.listItem.find((item) => item.id === action.payload.id)
                const item= {
                    id:action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity:0,
                    time: new Date()
                }
                if(checkItemExits !== undefined){
                    checkItemExits.quantity ++
                    state.totalPrice +=checkItemExits.totalPrice
                    
                }else  {
                    state.listItem.push(item) 

                }
                setItemStorage("cart",[...state.listItem]) 
                setToastMessage("Add to cart Successfully!")    
            },
            removeCart(state,action) {
                const id =action.payload.id
                const checkItemExits = state.listItem.find((item) => item.id === action.payload.id)
                if (checkItemExits.quantity === 1) {
                    state.listItems = state.listItem.filter((item) => item.id !== checkItemExits.id)
                    checkItemExits.quantity--
                    state.totalPrice -=checkItemExits.totalPrice
                }else{
                    checkItemExits.quantity--
                    state.totalPrice -=checkItemExits.totalPrice
                }
                setToastMessage("Remove to cart Successfully!")    
            }
        }
    }
)
export const { addToCart,removeCart} = cartSlice.actions
export default cartSlice.reducer