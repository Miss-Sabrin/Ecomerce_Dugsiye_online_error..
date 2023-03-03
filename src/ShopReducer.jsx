export const initialState={
    products:[],
    total:0,
};

const ShopReducer=(state,  action)=>{
    const {type,payload}=action;
    switch(type){
        case "ADD_TO_CART":
            return{
                ...state,
                 products:payload.products,
            };

        case "REMOVE_FROM_CART":
            return{
                    ...state,
                     products:payload.products,
                };   
                
                case "CALCULATE_TOTAL_PRICE":
                    return{
                        ...state,
                        payload:total,
                    }

                

                

            default:
                 return initialState;
               
                // throw new Error("unknown reducer")
        
    }

}
export default ShopReducer;