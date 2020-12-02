import { put, all, takeLatest } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* throttledSort(e) {
  yield delay(400);
  yield put({ type: "BOOK_SORT", payload: e.payload });
}

function* watchSort() {
  yield takeLatest("THROTTLED_SORT", throttledSort);
}

export default function* rootSaga() {
  yield all([watchSort()]);
}
