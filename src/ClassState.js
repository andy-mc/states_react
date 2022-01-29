import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: false}
  }

  render() {
    const {error} = this.state;
    const {name} = this.props;
    
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>
        {error && (
        <p>Error: el código es incorrecto.</p>
        )}
        <input type='text' placeholder='código de seguridad'/>
        <button onClick={() => {this.setState({error: !error})}}>
          Comprobar
        </button>
      </div>
    )
  }
}

export {ClassState};