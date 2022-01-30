import {useState} from "react";

const useStateMany = (init_state) => {
  const [_state, _setState] = useState(init_state);

  const setState = (state) => {
    _setState((prevState) => ({...prevState, ...state}))
  }

  return [_state, setState];
}

export { useStateMany }