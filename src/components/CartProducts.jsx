import React from 'react'
import useShop from '../ShopiContext'



const CartProducts = () => {
    const {products,removeFromCart,total}=useShop();
  return (
    <div className='cart-products'>
        <h2>cart products</h2>
        {products.map((product)=>(
            <div className="cart-product">
                <div className="cart-title-img">
                    <img src={product.urlImage} alt="" />
                    <span>{product.name}</span>
                </div>
                <h5>${product.price}</h5>
                <span className='delte' onClick={()=>removeFromCart(product)}>Delete</span>
            </div>
        ))}
        <div className="total-price">
            <h2>Total pric: ${total}</h2>
        </div>
    </div>
  )
}

export default CartProducts;