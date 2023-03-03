import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../Pages/Cart'
import useShop from '../ShopiContext'
import "../styles.css"

const Header = () => {
  const { products}=useShop();
  return (
    <div className="menu">
      <Link  to ="/" className='logo'>Reactfy</Link>
      <div className='links'>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact</Link>
         <Link to='/cart'>Cart</Link>

      </div>
      <Link to='/cart'><span className='cart'>{products.length}</span></Link>


    </div>
  )
}

export default Header