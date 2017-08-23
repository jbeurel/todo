import { all } from 'redux-saga/effects'
import { tagSagas } from './tags';


export default function* sagas() {
  yield all([
    ...tagSagas
  ]);
}
