import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreator';
import axios from 'axios';

function* getInitList() {
    try {
        const res = yield axios.get('/api/todoList.json');
        const action = initListAction(res.data.data);
        yield put(action);
    } catch (error) {
        yield put();
    }
}

function* sagas() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default sagas;