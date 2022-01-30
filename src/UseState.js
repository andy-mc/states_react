import React, {useState, useEffect} from "react";

const UseState = ({name}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    }
  }, [loading])

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