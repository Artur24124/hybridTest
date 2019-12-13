import { fork } from 'redux-saga/effects';

import { articlesSagas } from './articles';

export default function*() {
    yield fork(articlesSagas);
}