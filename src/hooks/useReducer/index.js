import { useReducer } from "react";

const UseReducer = ( initial_state ) => {
  function reducer ( state, action ) {
    const mapActionState = ( payload = {} ) => ({
      "Confirm": {
        confirmed: true,
        deleted: false,
        error: false,
        loading: false
      },
      "Error": { 
        error: true, 
        loading: false 
      },
      "Write": { 
        code: payload.code
      },
      "Check": { 
        loading: true
      },
      "Delete": { 
        confirmed: false, 
        deleted: true
      },
      "Reset": {
        code:'',
        confirmed: false,
        deleted: false,
        loading: false,
        error: false,
      }
    })

    const new_state = mapActionState( action.payload )[ action.type ]

    return new_state ? { ...state, ...new_state } : state
  }

  return useReducer( reducer, initial_state );
}

export { UseReducer }