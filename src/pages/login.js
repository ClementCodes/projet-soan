import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import logo from '../img/logoetoile.svg'
import AuthenticationService from '../services/authentification-service';


const Login = () => {

  const history = useHistory();

  const [form, setForm] = useState({
    username:  '' ,
    password:  '' 
  });

  const [message, setMessage] = useState('Vous êtes déconnecté)');

  const handleInputChange = (e) => {
    const fieldName= e.target.name;
    const fieldValue = e.target.value;
    const newField = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField});
  }

  const validateForm = () => {
    let newForm = form;

    // Validator username
    if(form.username.value.length < 3) {
      const errorMsg = 'Votre prénom doit faire au moins 3 caractères de long.';
      const newField = { value: form.username.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ username: newField } };
    } else {
      const newField = { value: form.username.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ username: newField } };
    }

    // Validator password
    if(form.password.value.length < 6) {
      const errorMsg = 'Votre mot de passe doit faire au moins 6 caractères de long.';
      const newField = {value: form.password.value, error: errorMsg, isValid: false};
      newForm = { ...newForm, ...{ password: newField } };
    } else {
      const newField = { value: form.password.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ password: newField } };
    }

    setForm(newForm);

    return newForm.username.isValid && newForm.password.isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if(isFormValid) {
      setMessage('👉 Tentative de connexion en cours ...');
      AuthenticationService.login(form.username.value, form.password.value).then(isAuthenticated => {
        if(!isAuthenticated) {
          setMessage('Identifiant ou mot de passe incorrect.');
          return;
        }
        
        history.push('/payment');
        
      });
    }
  }

  return (
    <div className="page-login">
      <span className="img-logo-texte"> <img src={logo} alt="logo-soan" srcset="" />
        <p>Soan</p></span>
      <div className="form">
        <h2>
          Inscription
        </h2>
        <br />
        <form action="" onSubmit={handleSubmit} >
          <label htmlFor="email">Adresse Email</label>
          <br />
          <input className="input" id="username" type="text" name="username"  value={form.username.value} onChange={e => handleInputChange(e)}></input>
          <div className="email error">{form.username.error} </div>
   
          <br />
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input id="password" type="password" name="password" className="input" value={form.password.value} onChange={e => handleInputChange(e)}></input>
         
          {/* <div className="condition">
            <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" />
            <label for="subscribeNews">J'accepte les conditions generales d'utilisation</label>
          </div> */}
          <div className="password error">{form.password.error}</div>
          <br />
          <button className="inscription input" type="submit" value="S'inscrire" >S'inscrire</button>
          <br />
          <hr />
          <div className="login-social ">
            <input  className='input' type="submit" value="Google" />
            <input className='input' type="submit" value="Linkedin" />
        
          </div>
         
        </form>
      </div>
      <h3>j'ai déja un compte ?</h3>
    </div>
  );
};

export default Login;