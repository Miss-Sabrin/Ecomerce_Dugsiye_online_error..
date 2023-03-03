import React, { useState } from 'react'
import { useEffect } from 'react';

const Payment = () => {
    const initialPayment={
        evc:false,
        zaad:false,
        sahal:false,
    };
    const[payment,setPayment]=useState(initialPayment)

    const [updated,setUpdated]=useState(false);

    useEffect(()=>{},[updated])


    
  return (
    <div>
        <h2>pay with</h2>
        <div className={`payment-cards${payment.zaad && "selected"}`}
        onClick={()=>setPayment({...initialPayment,zaad:true})}
        >
            <div className="payment-card">
                <h3>zaad service</h3>
            </div>

        </div>


        <div className={`payment-card${payment.evc && "selected"}`}
         onClick={()=>setPayment({...initialPayment,evc:true})}
        >
    <div className="payment-card">
        <h3>evc plus</h3>
    </div>
</div>
<div className={`payment-card${payment.sahal && "selected"}`}
 onClick={()=>setPayment({...initialPayment,
sahal:true})}
>
    <div className="payment-card">
        <h3>sahal</h3>
    </div>
</div>

<form>
    <input type="text" className='from-control' placeholder='123...' />
     <button className='btn-proceed'>proceed</button>

</form>



    </div>
  )
}

export default Payment