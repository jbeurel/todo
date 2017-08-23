// import { eventChannel } from 'redux-saga';
import { call, fork, put, take } from 'redux-saga/effects';
import { tagActions } from './actions';
import { tagList } from './tag-list';


// function subscribe() {
//   return eventChannel(emit => tagList.subscribe(emit));
// }

// function* read() {
//   const channel = yield call(subscribe);
//   while (true) {
//     let action = yield take(channel);
//     yield put(action);
//   }
// }

function* write(context, method, onError, ...params) {
  try {
    yield call([context, method], ...params);
  }
  catch (error) {
    yield put(onError(error));
  }
}

const createTag = write.bind(null, tagList, tagList.push, tagActions.createTagFailed);
const removeTag = write.bind(null, tagList, tagList.remove, tagActions.removeTagFailed);
const updateTag = write.bind(null, tagList, tagList.update, tagActions.updateTagFailed);


//=====================================
//  WATCHERS
//-------------------------------------

function* watchCreateTag() {
  while (true) {
    let { payload } = yield take(tagActions.CREATE_TAG);
    yield fork(createTag, payload.tag);
  }
}

function* watchRemoveTag() {
  while (true) {
    let { payload } = yield take(tagActions.REMOVE_TAG);
    yield fork(removeTag, payload.tag.key);
  }
}

function* watchUpdateTag() {
  while (true) {
    let { payload } = yield take(tagActions.UPDATE_TAG);
    yield fork(updateTag, payload.tag.key, payload.changes);
  }
}


//=====================================
//  TAG SAGAS
//-------------------------------------

export const tagSagas = [
  fork(watchCreateTag),
  fork(watchRemoveTag),
  fork(watchUpdateTag)
];
