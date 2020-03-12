import { delay, put, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from '@action/actionTypes'
function * onMultiplesActions () {
    yield delay(1000)
    yield put({type: ActionTypes.MULTIPLES_ACTION})
}

function * onDivideAction () {
    yield delay(1000)
    yield put({type: ActionTypes.DIVIDE_ACTION})
}

export const multiplesWatcher = takeLatest(ActionTypes.MULTIPLES, onMultiplesActions);
export const divideWatcher = takeLatest(ActionTypes.DIVIDE, onDivideAction);
