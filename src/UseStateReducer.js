import React, {useEffect, useCallback} from "react";
import { UseReducer } from "./hooks/useReducer";
import { actionsTypes } from "./actionsTypes";
const SECURITY_CODE = "paradigma";

const UseStateReducer = ({name}) => {
  const [state, dispatch] = UseReducer({
    code:'',
    confirmed: false,
    deleted: false,
    loading: false,
    error: false,
  });
  
  const {code, confirmed, deleted, loading, error} = state;
  
  const onConfirm = useCallback(() => {
    dispatch({type: actionsTypes.confirm})
  }, [dispatch])

  const onError = useCallback(() => {
    dispatch({type: actionsTypes.error})
  }, [dispatch])

  const onWrite = (value)=> {
    dispatch({
      type: actionsTypes.write,
      payload: {code: value}
    });
  }

  const onCheck = () => {
    dispatch({type: actionsTypes.check})
  }

  const onDelete = () => {
    dispatch({type: actionsTypes.delete})
  }

  const onReset = () => {
    dispatch({type: actionsTypes.reset})
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

export {UseStateReducer};