import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from '../Alert/Alert.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



function Formulario({ addAlert }) {
  const [inputs, setInputs] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    password1: '',
  });

  function inputsHandler(e) {
    const { id, value } = e.target;
    setInputs({ ...inputs, [id]: value });
  }

  function validacionInputs(e) {
    e.preventDefault();

    const isValidNombre = /^[a-zA-Z0-9]{4,}$/;
    const isValidApellido = /^[a-zA-Z0-9]{4,}$/;
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

 
    if (
      inputs.nombre.trim() === '' ||
      inputs.apellido.trim() === '' ||
      inputs.email.trim()=== '' ||
      inputs.password.trim() === '' ||
      inputs.password1.trim() === ''
    ) {
      addAlert({
        texto: 'Debes completar todos los campos!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!isValidNombre.test(inputs.nombre)) {
      addAlert({
        texto: 'El Nombre debe tener mínimo 4 caracteres y no se permiten caracteres especiales!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!isValidApellido.test(inputs.apellido)) {
      addAlert({
        texto: 'El Apellido debe tener mínimo 4 caracteres y no se permiten caracteres especiales!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!isValidEmail.test(inputs.email)) {
      addAlert({
        texto: 'Formato de email incorrecto!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!isValidPassword.test(inputs.password)) {
      addAlert({
        texto: 'La contraseñas non coinciden,  deben ser iguales  y  deben tener mínimo 8 caracteres, una letra mayúscula, una letra minúscula y un número!',
        tipo: 'alert-danger',
        estado: true,
      });

    } else {
      addAlert({
        texto: 'Registro creado exitosamente!',
        tipo: 'alert-success',
        estado: true,
      });
    }
  }

  return (
    <>
      <Form onSubmit={(e) => validacionInputs(e)}>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="nombre"
            name="Nombre"
            type="text"
            placeholder="Nombre"
            className="text-blue"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="apellido"
            name="Apellido"
            type="text"
            placeholder="Apellido"
            className="text-blue"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="email"
            name="Email"
            type="email"
            placeholder="tu.email@ejemplo.com"
            className='text-blue'

          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            className='text-blue'
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="password1"
            name="password1"
            type="password"
            placeholder="Confirme contraseña"
            className='text-blue'

          />
        </Form.Group>

        <Button variant="warning w-100" type="submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
}

export default Formulario;
