import React, {  useEffect, useState } from 'react';
import eye from "../img/icon_eye.svg";
import download from "../img/icon_download.svg";
import axios from 'axios';
import LogiqueModale from '../models/LogiqueModale';
import Modal from './Modal';



const ToPay = () => {
    const [data, setData] = useState([]);
    const { revele, toggle } = LogiqueModale()
    
    useEffect(() => {
        axios.get(`https://demo.soan-solutions.io/test_front/company/CIKLEA/payments`)
        .then((res) => setData(res.data.payments[0]))

    })

    


   
    return (
        <div className="toPay">
            <h2>CIKLEA-PARIS</h2>
            <div className="slice">
                <span><button  >A payer</button> 
                <span><button  >Payé</button>   
                    </span>
                </span>     
                <Modal
                    revele={revele}
                    cache={toggle}
                    />       
            </div>
            <hr className="line-topay" />
            <br />
            <div className="all">
                <div classname="tarif-left">
                    <p><span><input type="checkbox" name="" id="" onClick={toggle} /></span> Provision pour mission comptable et fiscale troisiéme trimestre</p>
                </div>
                <div className="tarif-right">
                    <p className="tarifUp" >
            {data.payedDate}           480,00 €  <img className="eye-moove" src={eye} alt="eye" /> <img src={download} alt="download" /> </p>
                    <p className="green">Posté il y a un jour</p>
                    <br />
                </div>
            </div>
            <div className="all2"> <div classname="tarif-left">
                <hr className="line-separate" />
                <p>FAC1610</p>
                <p> <span><input type="checkbox" name="" id="" onClick={toggle} /></span>Provision pour mission comptable et fiscale troiséme trimestre</p>
            </div>
                <div className="tarif-right">
                    <p className="tarifUp" >480,00 €  <img src={eye} alt="eye" />  <img src={download} alt="download" /> </p>
                    <p className="green">Posté il y a dix jours</p>
                </div></div>
        </div>
    );
};

export default ToPay;