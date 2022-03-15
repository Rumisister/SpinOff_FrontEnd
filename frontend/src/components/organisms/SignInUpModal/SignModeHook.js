import { useReducer } from 'react';

const initialState = {
  SIGN_IN: true,
  SIGN_UP: false,
  SIGN_INFO: false,
  FIND_INFO: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...initialState,
        SIGN_IN: false,
        [action.type]: true,
      };
    case 'SIGN_UP':
      return {
        ...initialState,
        SIGN_IN: false,
        [action.type]: true,
      };
    case 'SIGN_INFO':
      return {
        ...initialState,
        SIGN_IN: false,
        [action.type]: true,
      };
    case 'FIND_INFO':
      return {
        ...initialState,
        SIGN_IN: false,
        [action.type]: true,
      };
    case 'RESET':
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

function SignModeHook() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onReset = () => {
    dispatch({
      type: 'RESET',
    });
  };
  const onSignIn = () => {
    dispatch({
      type: 'SIGN_IN',
    });
  };
  const onSignUp = () => {
    dispatch({
      type: 'SIGN_UP',
    });
  };
  const onSignInfo = () => {
    dispatch({
      type: 'SIGN_INFO',
    });
  };
  const onFindInfo = () => {
    dispatch({
      type: 'FIND_INFO',
    });
  };

  return {
    state,
    dispatch,
    onSignIn,
    onSignUp,
    onSignInfo,
    onFindInfo,
    onReset,
  };
}

export default SignModeHook;
