import { useReducer } from 'react';

const initialState = {
  name: '',
  birth: '',
  phone: '',
  email: '',
  auth: '',
  authSent: false,
  nameError: false,
  birthError: false,
  phoneError: false,
  emailError: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.name]: action.value,
        [`${action.name}Error`]: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        [`${action.name}Error`]: true,
      };
    case 'RESET':
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

function SignUpHook() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onReset = () => {
    dispatch({
      type: 'RESET',
    });
  };
  const onChange = e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  };
  const setError = name => {
    dispatch({
      type: 'SET_ERROR',
      name,
    });
  };
  return {
    state,
    dispatch,
    onChange,
    setError,
    onReset,
  };
}

export default SignUpHook;
