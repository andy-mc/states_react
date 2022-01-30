import React, {useState, useEffect, useCallback} from "react";
const SECURITY_CODE = "paradigma";

const UseState = ({name}) => {
  const [_state, _setState] = useState({
    code:'',
    error: false,
    loading: false
  });

  const setState = useCallback((state) => {
    _setState({..._state, ...state})
  }, [_state, _setState])

  console.log('_state:', _state)
  const {code, loading, error} = _state;

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