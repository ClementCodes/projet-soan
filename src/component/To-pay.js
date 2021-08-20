import React from 'react';
import eye from "../img/icon_eye.svg";
import download from "../img/icon_download.svg";



const ToPay = () => {




    return (
        <div className="toPay">
            <h2>CIKLEA-PARIS</h2>
            <br />
            <br />
            <div className="slice">
                <span>A payer</span>
                <span className="ecart">Payé</span>
            </div>
            <hr className="line-topay" />
            <div className="all">
                <div classname="tarif-left">
               

                    <p>Provision pour mission comptable et fiscale troiséme trimestre</p>
                </div>
                <div className="tarif-right">
                    <p className="tarifUp" >480,00 €  <img className="eye-moove" src={eye} alt="eye" /> <img src={download} alt="download" /> </p>
                    <p className="green">Posté il y a dix jours</p>
                    <br />

                </div>

            </div>
            <div className="all2"> <div classname="tarif-left">
                <hr className="line-separate" />
                <p>FAC1610</p>
                <p>Provision pour mission comptable et fiscale troiséme trimestre</p>
            </div>
                <div className="tarif-right">
                    <p className="tarifUp" >480,00 €  <img src={eye} alt="eye" />  <img src={download} alt="download" /> </p>
                    <p className="green">Posté il y a dix jours</p>
                </div></div>

        </div>
    );
};

export default ToPay;