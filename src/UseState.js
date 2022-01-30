import React, {useState, useEffect} from "react";

const SECURITY_CODE = "paradigma";

const UseState = ({name}) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
        if (code !== SECURITY_CODE) {
          setError(true)
        } 
      }, 3000);
    }
  }, [loading])

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escriba el código de seguridad.</p>
      {!loading && error && (
        <p>Error: el código es incorrecto.</p>
      )}
      {loading && (
        <p>Cargando...</p>
      )}
      <input type='text' value={code}
        onChange={(event) => {
          setCode(event.target.value);
        }}
      placeholder='código de seguridad'/>
      <button onClick={() => {
        setError(false)
        setLoading(true)
        }}>
        Comprobar
      </button>
    </div>
  )
}

export {UseState};