import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'

const App=() =>{
  const [cart, setCart] = useState(5);
 
  return (
    <div className="container">
      <Header cart={cart} setCart={setCart}/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/cart' element={<Cart 
       setCart={setCart}/>} />





          

        
      </Routes>

      


  
    </div>
  )
}

export default App
