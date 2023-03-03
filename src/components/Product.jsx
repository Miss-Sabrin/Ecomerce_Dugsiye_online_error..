import { useEffect, useState } from "react";
import useShop from "../ShopiContext"

const Product =({product})=>{
    const {addToCard,removeFromCart, products} =useShop();
    const  [isInCart,setIsInCart]=useState(false)


    useEffect(()=>{
        const isCart=products.filter((pro)=>
        pro.id == product.id);
        if(isCart.length > 0){
            setIsInCart(true);
        }else{ 
            setIsInCart(false);  
        }
        console.log(isCart) 


    },[products]);




    const handleAdToCart=()=>{
        if(isInCart){
            removeFromCart(product);
        }else{
            addToCard(product);
        }
         
      console.log(products);

    }
      return (
        <div 
        className="card"
            style={{
                minHeight:"100%",
                background: ` linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url(${product.urlImage}) `,
               
                backgroundRepeat:"no-repeat"
            
            
                
                    }}>
            <div className="info">
                <span>{product.name}</span>
                <span>${product.price}</span>
                
            </div>
            <button className={`btn ${isInCart ?"btn-secondary":"btn-primary" } `} onClick={handleAdToCart}>
                 {isInCart ? "-" : "+"}</button>
        </div>
    )


}
export default Product;     