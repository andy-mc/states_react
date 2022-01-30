import React from "react";
import {Loading} from './Loading';

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false
    }
  }

  componentDidUpdate() {
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({loading: false})
      }, 3000);
    }
  }

  render() {
    const {error, loading} = this.state;
    const {name} = this.props;
    
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>
        {error && (
          <p>Error: el código es incorrecto.</p>
        )}
        {loading && (
          <Loading />
        )}
        <input type='text' placeholder='código de seguridad'/>
        <button onClick={() => {this.setState({...this.state, loading: true})}}>
          Comprobar
        </button>
      </div>
    )
  }
}

export {ClassState};