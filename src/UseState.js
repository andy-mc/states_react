import React, {useState, useEffect} from "react";

const UseState = ({name}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    console.log('useEffect: init')
    if(loading) {
      setTimeout(() => {
        console.log('setTimeout:inti')
        setLoading(false)
        console.log('setTimeout:end')
      }, 3000);
    }
    console.log('useEffect: end')
  }, )

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escriba el código de seguridad.</p>
      {error && (
        <p>Error: el código es incorrecto.</p>
      )}
      {loading && (
        <p>Cargando...</p>
      )}
      <input type='text' placeholder='código de seguridad'/>
      <button onClick={() => {setLoading(true)}}>
        Comprobar
      </button>
    </div>
  )
}

export {UseState};