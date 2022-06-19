import { call, put, takeEvery } from 'redux-saga/effects';
import { axios } from '../../api';
import {
  AVAILABLE_ID,
  AVAILABLE_NICK,
  CHECK_AUTH,
  FAILED_AUTH,
  FAILED_RECEIVE,
  FAILED_SIGNUP,
  IDEXISTING_CHECK,
  INVALID_ID,
  INVALID_NICK,
  NICKEXISTING_CHECK,
  REQUEST_AUTH,
  REQUEST_SIGNUP,
  SUCCESS_AUTH,
  SUCCESS_RECEIVE,
  SUCCESS_SIGNUP,
} from './action';

const requestEmailAuth = async email => {
  console.log(email + '!!');
  console.log(axios);
  const res = await axios({
    method: 'post',
    url: '/api/sign/auth-email',
    data: {
      email: email,
    },
  });
  console.log(res);
  return res;
};

const requestAvailableAuth = async ({ auth, email }) => {
  const res = await axios({
    method: 'patch',
    url: '/api/sign/auth-email',
    data: {
      authToken: auth,
      email: email,
    },
  });

  return res;
};

const requestAvailableID = async id => {
  const res = await axios({
    method: 'get',
    url: '/api/sign/exist/account-id',
    data: null,
    params: {
      accountId: id,
    },
  });
  console.log(res);
  return res;
};

const requestAvailableNick = async nickName => {
  const res = await axios({
    method: 'get',
    url: '/api/sign/exist/nickname',
    data: null,
    params: {
      nickname: nickName,
    },
  });
  console.log(res);
  return res;
};

const requestSignUp = async ({
  id,
  pw,
  auth,
  birth,
  email,
  name,
  nickName,
}) => {
  const res = await axios({
    method: 'post',
    url: '/api/sign/register',
    data: {
      accountId: id,
      accountPw: pw,
      authToken: auth,
      birth: birth,
      email: email,
      name: name,
      nickname: nickName,
    },
  });
  console.log(res);
  return res;
};

function* handleRequestAuth(action) {
  try {
    console.log(action);
    console.log('@@@@@@@');
    const { data: state } = yield call(requestEmailAuth, action.payload);
    console.log(state);
    yield put({
      type: SUCCESS_RECEIVE,
      payload: { state },
    });
  } catch (e) {
    console.log(e);
    yield put({ type: FAILED_RECEIVE, payload: { error: e } });
  }
}

function* handleAvailableAuth(action) {
  try {
    const { data: state } = yield call(requestAvailableAuth, action.payload);
    console.log(state);
    yield put({
      type: SUCCESS_AUTH,
      payload: action.payload,
    });
  } catch (e) {
    console.log(e);
    yield put({ type: FAILED_AUTH, payload: { error: e } });
  }
}

function* handleAvailableID(action) {
  try {
    const { data: state } = yield call(requestAvailableID, action.payload);
    console.log(state);
    console.log(action.payload + ' ## ');
    if (state.data) {
      yield put({
        type: AVAILABLE_ID,
        payload: action.payload,
      });
    } else {
      yield put({
        type: INVALID_ID,
        payload: { error: '아이디 중복' },
      });
    }
  } catch (e) {
    yield put({
      type: INVALID_ID,
      payload: { error: e },
    });
  }
}

function* handleAvailableNick(action) {
  try {
    const { data: state } = yield call(requestAvailableNick, action.payload);
    console.log(state);
    if (state.data) {
      yield put({
        type: AVAILABLE_NICK,
        payload: action.payload,
      });
    } else {
      yield put({ type: INVALID_NICK, payload: { error: '닉네임 중복' } });
    }
  } catch (e) {
    console.log(e);
    yield put({ type: INVALID_NICK, payload: { error: e } });
  }
}

function* handleSignUp(action) {
  try {
    const { data: state } = yield call(requestSignUp, action.payload);
    console.log(state);
    yield put({
      type: SUCCESS_SIGNUP,
      payload: action.payload,
    });
  } catch (e) {
    console.log(e);
    yield put({ type: FAILED_SIGNUP, payload: { error: e } });
  }
}
export function* watchSignUp() {
  yield takeEvery([REQUEST_AUTH], handleRequestAuth);
  yield takeEvery([CHECK_AUTH], handleAvailableAuth);
  yield takeEvery([IDEXISTING_CHECK], handleAvailableID);
  yield takeEvery([NICKEXISTING_CHECK], handleAvailableNick);
  yield takeEvery([REQUEST_SIGNUP], handleSignUp);
}
