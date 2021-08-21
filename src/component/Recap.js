
import React from 'react';


const Recap = () => {

     
    return (
        <div className="recap">
            <div className="recap-margin">
                <br />
                <br />
                <div>
                    <p className="bold">Récapitulatif</p>
                </div>
                <br />
                <div>
                    <p className="grey">Facture </p>
                     
                </div>
                <div></div>
                <span>776,00€</span> 
               <hr />
                <br />
                <div>
                    <p className="grey">Total </p>
                     
                </div><div> <span>776,00€</span>  </div>
               
                <br />
                <button>Payer par virement</button>   
            </div>
        </div>
    );
};

export default Recap;