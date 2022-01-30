import React, {useEffect} from "react";
import { useStateMany } from "./hooks/useStateMany";
const SECURITY_CODE = "paradigma";

const UseState = ({name}) => {
  const [state, setState] = useStateMany({
    code:'',
    error: false,
    loading: false
  });
  
  const {code, loading, error} = state;

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        const is_code_valid = code === SECURITY_CODE;
        setState({loading: false, error: !is_code_valid})
      }, 3000);
    }
  }, [loading, code, setState])

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
        onChange={({target: {value}}) => {
          setState({code: value});
        }}
        placeholder='código de seguridad'
      />
      <button onClick={() => {
        setState({loading: true});
      }}>
        Comprobar
      </button>
    </div>
  )
}

export {UseState};