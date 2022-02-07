import { useReducer } from "react";
import { actionsTypes } from "../../actionsTypes";

const UseReducer = ( initial_state ) => {
  function reducer ( state, action ) {
    const mapActionState = ( payload = {} ) => ({
      [actionsTypes.confirm]: {
        confirmed: true,
        deleted: false,
        error: false,
        loading: false
      },
      [actionsTypes.error]: { 
        error: true, 
        loading: false 
      },
      [actionsTypes.write]: { 
        code: payload.code
      },
      [actionsTypes.check]: { 
        loading: true
      },
      [actionsTypes.delete]: { 
        confirmed: false, 
        deleted: true
      },
      [actionsTypes.reset]: {
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