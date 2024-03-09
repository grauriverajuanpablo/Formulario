import React from 'react';

export default function Alert({ alert }) {
const { texto, tipo, estado } = alert;

return (
    // JSX para mostrar la alerta
    <div className={`alert ${tipo}`} role="alert">
    {texto}
    </div>
);
}