import React from "react";
import {Loading} from './Loading';

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      loading: false,
      error: false
    }
  }

  componentDidUpdate() {
    const {code, loading} = this.state;

    if (loading) {
      setTimeout(() => {
        const has_code_error = code !== SECURITY_CODE;
        this.setState({loading: false, error: has_code_error})
      }, 3000);
    }
  }

  render() {
    const {code, loading, error} = this.state;
    const {name} = this.props;
    
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>
        {!loading && error && (
          <p>Error: el código es incorrecto.</p>
        )}
        {loading && (
          <Loading />
        )}
        <input type='text' placeholder='código de seguridad'
          value={code}
          onChange={({target: {value}}) => {
            this.setState({code: value})
          }}
        />
        <button 
          onClick={() => {this.setState({loading: true})}}
        >
          Comprobar
        </button>
      </div>
    )
  }
}

export {ClassState};