import { put, all, takeLatest } from "redux-saga/effects";
import { RootStateType } from "types/index";
interface ThrottledSort {
    type: "THROTTLED_SORT";
    payload: RootStateType["books"]["currentSortColumn"];
}
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* throttledSort(e: ThrottledSort) {
    yield delay(400);
    yield put({ type: "BOOKS_SORT", payload: e.payload });
}

function* watchSort() {
    yield takeLatest("THROTTLED_SORT", throttledSort);
}

export default function* rootSaga() {
    yield all([watchSort()]);
}
