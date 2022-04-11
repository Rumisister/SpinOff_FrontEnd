import { takeEvery, put, call } from 'redux-saga/effects';
import { store } from '..';
import { axios } from '../../api';
import {
  FAILED_CREATE_POST,
  REQUEST_CREATE_POST,
  SUCCESS_CREATE_POST,
} from './action';

const requestCreatePost = async () => {
  const formData = new FormData();
  const createPostVO = store.getState()?.postReducer?.createPostVO;
  const formPostVO = {
    ...createPostVO,
    hashtagContents: [...createPostVO.hashtagContents],
    collectionIds: [...createPostVO.collectionIds],
  };
  formData.append(
    'createPostVO',
    new Blob([JSON.stringify(formPostVO)], { type: 'application/json' }),
  );
  console.log(formData);
  const images = store.getState()?.postReducer?.images;
  images.forEach(image => formData.append('images', image.file));
  console.log(createPostVO);
  console.log(images);
  for (let key of formData.keys()) {
    console.log(key);
  }
  for (let value of formData.values()) {
    console.log(value);
  }
  for (var pair of formData.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
  }
  console.log('포스트 요청전!!');
  const res = await axios({
    method: 'post',
    url: '/api/post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  });
  console.log(res);
  return res;
};

function* handleRequestPost() {
  try {
    const {
      data: { data },
    } = yield call(requestCreatePost);
    console.log(data);
    yield put({
      type: SUCCESS_CREATE_POST,
    });
  } catch (e) {
    console.log(e.response);
    console.log('사가 에러');
    yield put({ type: FAILED_CREATE_POST, payload: { error: e } });
  }
}

export function* watchCreatePost() {
  yield takeEvery([REQUEST_CREATE_POST], handleRequestPost);
}
