import { createContext, useContext, useReducer } from "react";
import ShopReducer, { initialState } from "./ShopReducer";

const ShopContext=createContext (initialState);
 export const ShopProvider=({children})=>{
    const [state,dispatch]=useReducer(ShopReducer,initialState);

    const addToCard=(product)=>{
        const updatedProduct=state.products.concat(product);
        // calculateTotal(updatedProduct)
        dispatch({
            type:"ADD_TO_CART",
            payload: {
                products:updatedProduct
            }

        })
        
 
        };
        const removeFromCart=(product)=>{
            const updatedProduct=state.products.filter(p=>p.id !==product.id)

            calculateTotal(updatedProduct)

 

            dispatch({
                type: "REMOVE_FROM_CAR",
                payload:{
                    products:updatedProduct
                }
            })
        } 

        const calculateTotal=(products)=>{
            let total=0;
            products.forEach(pro=>{
                total+=pro.price;
            })

            dispatch({
                type:"CALCULATE_TOTAL_PRICE",
                payload:total
            });
                
            
        }






        const values={
            products:state.products,
            total:state.total,
            addToCard,
            removeFromCart
       
       
        


    };
    return <ShopContext.Provider  value={values}>
    {children}
    </ShopContext.Provider>



}

const useShop=()=>{
    const context=useContext(ShopContext);
    if(context ===undefined){
        throw new Error("contxt must be used inside shopContext")
    }
    return context;
}
export default useShop
