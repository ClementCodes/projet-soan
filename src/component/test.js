// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import NavRegister from '../component/Nav-register';
// import Recap from '../component/Recap';
// import ToPay from '../component/To-pay';
// import logo from '../img/logoetoile.svg';


// const Payment = () => {
//     const [data, setData] = useState([]);

//     const paymentObjet = Object.keys(data).map((i) => data[i])
//     const paymentUn= paymentObjet
//     const lapaye= paymentUn[0].payedDate

//     useEffect(() => {
//         axios.get('https://demo.soan-solutions.io/test_front/company/CIKLEA/payments')
//             .then((res) => setData(res.data.payments))
         
        
        
       
            
          
        
     
//               console.log(lapaye)
//     }, [])
    
   
//     return (
//         <div className="payment">
//             <p>{lapaye}</p> 
          
//             <div className="navbar" >
// {data.map((key) => (
//                 <p key={key.invoiceNumber}>{key.payedDate}</p>
//                     ))} 

                
//             <p>Factures fournisseurs pour <span>SAS ATELIER DES LIEUX</span></p>
//             <img src={logo} alt="" />
//             </div>
//         <ToPay/>
//             <Recap />
//             <NavRegister/>
//         </div>
      
//     );
// };

// export default Payment;