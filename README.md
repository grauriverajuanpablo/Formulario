Formulario cumple con los conceptos aprendidos para controlar los estados de los componentes en React y permite al usuario validar un formulario de registro utilizando los eventos onChange y onSubmit.

Uso de useState: El formulario utiliza el hook useState para controlar el estado de los campos del formulario. Cada vez que un campo cambia, se actualiza el estado correspondiente.

Eventos onChange: Cada campo del formulario tiene un evento onChange que llama a la función inputsHandler(e). Esta función actualiza el estado del formulario con el valor del campo que cambió.

Evento onSubmit: El formulario tiene un evento onSubmit que llama a la función validacionInputs(e). Esta función se activa cuando el usuario envía el formulario y realiza las validaciones necesarias.

Validación de Campos: Dentro de validacionInputs, se realizan varias validaciones:

Verifica que ningún campo esté vacío.
Verifica que el nombre y apellido tengan al menos 4 caracteres y no contengan caracteres especiales.
Verifica que el email tenga un formato válido.
Verifica que la contraseña cumpla con los requisitos: al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.
Finalmente, verifica que las contraseñas password y password1 sean iguales.
Alertas de Validación: Si alguna validación falla, se muestra una alerta correspondiente utilizando la función addAlert, que probablemente sea una función pasada como prop al componente.

Envío Exitoso: Si todas las validaciones pasan, se muestra una alerta de éxito indicando que el registro se creó exitosamente.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
