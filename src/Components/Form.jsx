import { useState } from "react";
import { validarEmail, validarNombre } from "../utils/validations";

const Form = () => {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
  })

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
    setSubmitted(false);
    setError(false);
  }

  const handleReset = () => {
    setCustomer({
      name: "",
      email: "",
    })
    setSubmitted(false);
    setError(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validarNombre(customer.name);
    const isEmailValid = validarEmail(customer.email);

    if (isNameValid && isEmailValid) {
      setSubmitted(true);
      setError(false);
      console.log(`Datos enviados - Nombre: ${customer.name}, Email: ${customer.email}`);
    } else {
      setError(true);
    }
  }

  return (
    <div className="formWrapper">
      {submitted && <h4 style={{ color: "green" }}>Gracias {customer.name}, te contactaremos cuando antes vía email</h4> }
      {error && <h4 style={{ color: "red" }}>Por favor verifique su información nuevamente</h4> }

      <form onSubmit={handleSubmit}>
        <label>Nombre completo: </label>
        <input onChange={handleChange} value={customer.name} name="name" type="text" />
        <label>Email: </label>
        <input onChange={handleChange} value={customer.email} name="email" type="email" />
        <button>Enviar información</button>
      </form>
      <button onClick={handleReset}>Limpiar campos</button>
    </div>
  );
};

export default Form;
