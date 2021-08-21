
import React, { Fragment, useEffect, useState } from 'react';
import NavRegister from '../component/Nav-register';
import Recap from '../component/Recap';
import ToPay from '../component/To-pay';
import logo from '../img/logoetoile.svg';



  
    const Payment = () => {
       
       
   
            
    return (
        <div className="payment">
            <div className="navbar" >
                <p>Factures fournisseurs pour <span>SAS ATELIER DES LIEUX</span></p>
                <img src={logo} alt="logo-soan" />
            </div>
            <ToPay />
            <Recap />
            <NavRegister />
        </div>
      
    );
};

export default Payment;