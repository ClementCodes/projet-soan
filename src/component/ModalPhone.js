import React, { Fragment } from 'react';


const ModalPhone = ({ reveles, caches }) => reveles ? (

    <Fragment>
        <div className="overlay1">
            <div className="wrapper-phone">
           <div className="button"> </div>
                <button type="button" className="close" onClick={caches}><span className="x">X</span></button>
                <div className="Payer-modal">
                   
                </div>
                <div>
                    <p className="grey-modal">Telephone</p>
                    <p>+ 33 00 00 00</p>
                </div>
                <div>
                    <p className="grey-modal">Mail</p>
                    <p>ladaf@jfzf.com</p>
                </div>
              
                <button type="button" className="button-modal-phone" onClick={caches}><span>Terminer</span></button>
            </div>       
            <div>
            </div>
        </div>      
    </Fragment>

) : null;




export default ModalPhone;


   