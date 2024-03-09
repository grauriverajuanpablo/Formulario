import React, {useState}  from 'react';
import SocialButton from "../SocialButton/SocialButton";
import Formulario from "../Formulario/Formulario.jsx";
import Alert from '../Alert/Alert.jsx';

export default function Registro({ onAlert }) {

return (
    <> <h1>Crea una cuenta </h1>
    <SocialButton button="fa-facebook" />
    <SocialButton button="fa-github" />
    <SocialButton button="fa-linkedin" />
    <p>Puedes usar email para registrarse.</p>
    <Formulario addAlert={onAlert} />
    </>
    );
}