import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { dupCheckNeeded } from '../../../store/SignUp/action';

const initialState = {
  id: '',
  pw: '',
  pwCheck: '',
  nickName: '',
  firstAgreement: false,
  secondAgreement: false,
  firstAgreementError: false,
  secondAgreementError: false,
  idError: false,
  pwError: false,
  pwCheckError: false,
  nickNameError: false,
  idCheckError: false,
  nickNameCheckError: false,
};
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.name]: action.value,
        [`${action.name}Error`]: false,
        [`${action.name}CheckError`]: false,
      };
    case 'CHANGE_CHECK':
      return {
        ...state,
        [action.name]: action.checked,
      };
    case 'SET_ERROR':
      return {
        ...state,
        [`${action.name}Error`]: true,
      };
    case 'RESER_ERROR':
      return {
        ...state,
        [`${action.name}Error`]: false,
      };
    case 'RESET':
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

function SignInfoHook() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reduxDispatch = useDispatch();
  const onReset = () => {
    dispatch({
      type: 'RESET',
    });
  };
  const onChange = e => {
    const { name, value } = e.target;
    if (name === 'id') {
      reduxDispatch(dupCheckNeeded('id'));
    }
    if (name === 'nickName') {
      reduxDispatch(dupCheckNeeded('nick'));
    }
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  };
  const checkBoxChange = e => {
    const { name, checked } = e.target;
    dispatch({
      type: 'CHANGE_CHECK',
      name,
      checked,
    });
  };
  const setError = name => {
    dispatch({
      type: 'SET_ERROR',
      name,
    });
  };
  const resetError = name => {
    dispatch({
      type: 'RESET_ERROR',
      name,
    });
  };
  return {
    state,
    dispatch,
    onChange,
    checkBoxChange,
    setError,
    onReset,
    resetError,
  };
}

export default SignInfoHook;
