import { takeEvery, put, call } from 'redux-saga/effects';
import { axios } from '../../api';
import { SET_TOKEN } from '../Auth/action';
import { FAILED_SIGNIN, REQUEST_SIGNIN, SUCCESS_SIGNIN } from './action';

const requestSignIn = async ({ id, pw }) => {
  console.log('들어옴!');
  const res = await axios({
    method: 'patch',
    url: '/api/sign/login',
    data: {
      accountId: id,
      accountPw: pw,
    },
  });
  console.log(res);
  return res;
};

function* handleSignIn(action) {
  try {
    console.log(action.payload);
    const {
      data: {
        data: { token, refreshToken, id },
      },
    } = yield call(requestSignIn, action.payload);
    console.log(token);
    console.log(refreshToken);
    console.log(id);
    yield put({
      type: SUCCESS_SIGNIN,
    });
    yield put({
      type: SET_TOKEN,
      payload: { token, refreshToken, id },
    });
  } catch (e) {
    console.log(e.response);
    console.log('사가 에러');
    yield put({ type: FAILED_SIGNIN, payload: { error: e } });
  }
}

export function* watchSignIn() {
  yield takeEvery([REQUEST_SIGNIN], handleSignIn);
}
