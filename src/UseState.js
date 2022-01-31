import React, {useEffect} from "react";
import { useStateMany } from "./hooks/useStateMany";
const SECURITY_CODE = "paradigma";

const UseState = ({name}) => {
  const [state, setState] = useStateMany({
    code:'',
    confirmed: false,
    deleted: false,
    loading: false,
    error: false,
  });

  const {code, confirmed, deleted, loading, error} = state;

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        if(code === SECURITY_CODE) {
          setState({ error: false, loading: false, confirmed: true })
        } else {
          setState({ error: true, loading: false })
        }
      }, 3000);
    }
  }, [loading, code, setState])

  if (!confirmed && !deleted) {
    return (
      <>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>
        {!loading && error && (
          <p>Error: el código es incorrecto.</p>
        )}
        {loading && (
          <p>Cargando...</p>
        )}
        <input type='text' value={code}
          placeholder='código de seguridad'
          onChange={({target: {value}}) => {
            setState({code: value});
          }}
        />
        <button onClick={() => {
          setState({loading: true});
        }}>
          Comprobar
        </button>
      </>
    )
  } else if (confirmed) {
    return (
      <>
        <h2>Eliminar {name}</h2>
        <p>¿Seguro que quieres eliminar {name}?</p>
        <button onClick={() => {setState({confirmed: false, code: ''});}}>
          No, volver
        </button>
        <button onClick={() => {setState({confirmed: false, deleted: true});}}>
          Sí, eliminar
        </button>
      </>
    )
  } else if (deleted) {
    return (
      <>
        <h2>{name} fue eliminado con éxito !!</h2>
        <button onClick={() => {setState({deleted: false, code: ''});}}>
          Recuperar {name}
        </button>
      </>
    )
  }
}

export {UseState};