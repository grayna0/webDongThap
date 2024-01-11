import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../hook/useStorage";
import setToastMessage from "../../compoents/setToastMessage";


const {setItemStorage,getItemStorage} =useLocalStorage()
const list = getItemStorage("cart")
const initialState :any={
    listItems:list? list : [],
  

}

export const cartSlice = createSlice(
    {
        name :"cart",
        initialState,
        reducers:{
            addToCart(state, action){
                const user =getItemStorage("u")
                if(user) {

                    const checkItemExits = state.listItems.find((item) => item.id === action.payload.id)
                    const item= {
                        id:action.payload.id,
                        name: action.payload.name,
                        price: action.payload.price,
                        img:action.payload.img[0],
                        quantity:1,
               
                    }
                    if(checkItemExits !== undefined){
                        checkItemExits.quantity ++
              
                        
                    }else  {
                        state.listItems.push(item) 
    
                    }
                    setItemStorage("cart",[...state.listItems]) 
                    setToastMessage("Thêm thành công")    
                }else{
                    setToastMessage("You need to Login")
                }
            },
            removeCart(state,action) {
                const id =action.payload.id
                const checkItemExits = state.listItems.find((item) => item.id === id)
                if (checkItemExits.quantity === 1) {
                    state.listItems = state.listItems.filter((item) => item.id !== id)
               
                }else{
                    checkItemExits.quantity--
         
                }
                setItemStorage("cart",[...state.listItems])
         
            },
            deleteItem(state,action){
                const id =action.payload.id
                const checkItemExits = state.listItems.find((item) => item.id === id)
                state.listItems = state.listItems.filter((item) => item.id !== id)
                setItemStorage("cart",[...state.listItems])
                setToastMessage("Xoá sản phẩm thành công!")   
            }
        }
    }
)
export const { addToCart,removeCart,deleteItem} = cartSlice.actions
export default cartSlice.reducer