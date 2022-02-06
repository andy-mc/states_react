import React, {useEffect, useCallback} from "react";
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
  
  const onConfirm = useCallback(() => {
    setState({ confirmed: true, deleted: false, error: false, loading: false })
  }, [setState])

  const onError = useCallback(() => {
    setState({ error: true, loading: false })
  }, [setState])

  const onWrite = (value)=> {
    setState({code: value});
  }

  const onCheck = () => {
    setState({loading: true});
  }

  const onDelete = () => {
    setState({confirmed: false, deleted: true})
  }

  const onReset = () => {
    setState({
      code:'',
      confirmed: false,
      deleted: false,
      loading: false,
      error: false,
    })
  }

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        if(code === SECURITY_CODE) {
          onConfirm()
        } else {
          onError()
        }
      }, 3000);
    }
  }, [onConfirm, onError, code, loading])

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
            onWrite(value)
          }}
        />
        <button onClick={() => {
          onCheck()
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
        <button onClick={() => {onReset()}}>
          No, volver
        </button>
        <button onClick={() => {onDelete()}}>
          Sí, eliminar
        </button>
      </>
    )
  } else if (deleted) {
    return (
      <>
        <h2>{name} fue eliminado con éxito !!</h2>
        <button onClick={() => {onReset()}}>
          Recuperar {name}
        </button>
      </>
    )
  }
}

export {UseState};