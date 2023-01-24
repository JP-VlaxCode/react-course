import { useEffect, useState } from 'react'
import './App.css'

import Button from './components/Button';

function App() {
  const [name, setName] = useState('')
  const [user, setUser] = useState({
    name: '',
    lastname: ''
  });

  const PI = 3.18;

  // Hooks -> Manejo del ciclo de vida de un componente.
  // Como sabemos que se monta por primera vez... useEffect sin dependencias [].
  useEffect(() => {
    //Mount
    console.log("Solo la primera vez");

    setName('JP');

    setUser({ name: 'Jose', lastname: 'Pulgar'})

    // Si se desmonta es el return de este useEffect
    return () => {
      //Unmount
      // Aca la accion cuando el componente se desmonta.
    }
  }, [/** Dependencia */])

  useEffect(() => {
    // useEffect que contiene la dependencia del set de name.
    console.log(name);
  }, [name])

  // Funciones ...
  const increment = () => {
    console.log("Se ejecuto")
  }

  const decrement = () => {
    console.log("Se ejecuto")
  }

  return (
    <div className="App">
      <label>asdas {name}</label>
      <label>{JSON.stringify(user)}</label>
      <Button textButton="Incremento" send={increment} />
      <Button textButton="Decremento" send={decrement} />
    </div>
  )
}

export default App
