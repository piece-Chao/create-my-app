import { all } from 'redux-saga/effects';
import { multiplesWatcher, divideWatcher } from './app';

export default function * sagas() {
    yield all([
        multiplesWatcher,
        divideWatcher
    ])
}
