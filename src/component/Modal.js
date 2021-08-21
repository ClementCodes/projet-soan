import React, { Fragment } from 'react';


const Modal = ({ revele, cache }) => revele ? (





    
    <Fragment>

        <div className="overlay">
            <div className="wrapper">
           <div className="button"> </div>
                <button type="button" className="close" onClick={cache}><span className="x">X</span></button>
                <div className="Payer-modal">
                    <p>Payer 776, 00€</p>

                </div>
                <div>
                    <p className="grey-modal">Iban</p>
                    <p>79719 199739 917 9 989 99 99</p>
                </div>
                <div>
                    <p className="grey-modal">code Bic</p>
                    <p>CFJK Yopilh 785689</p>
                </div>
                <p className="grey-modal">Afin d'en faciliter le traitement merci d'en indiquer les reféférences  de factures suivantes dans le libélé de votre virement</p>
                <button type="button" className="button-modal" onClick={cache}><span>Terminer</span></button>
            </div>
           
            <div>
            
            </div>
        </div>
        
    </Fragment>

) : null;




export default Modal;


   