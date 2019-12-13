import { call, takeEvery, put } from 'redux-saga/effects';
import * as articlesActions from '../actions/articles';

import {
    getArticles,
    createArticle,
    getArticleById,
    deleteArticle,
    editArticle
} from '../../api';

function* getArticlesSaga(action) {
    try {
        const { payload } = action;
        const response = yield call(getArticles, payload);
        yield put(articlesActions.getArticlesSuccess(response));
    } catch (e) {
        yield put(articlesActions.getArticlesError(e));
    }
}

function* getArticleByIdSaga(action) {
    try {
        const { payload } = action;
        const response = yield call(getArticleById, payload);
        yield put(articlesActions.getArticleByIdSuccess(response));
    } catch (e) {
        yield put(articlesActions.getArticleByIdError(e));
    }
}

function* editArticleSaga(action) {
    try {
        const { payload } = action;
        const response = yield call(editArticle, payload);
        yield put(articlesActions.editArticleSuccess(response));
    } catch (e) {
        yield put(articlesActions.editArticleError(e));
    }
}

function* deleteArticleSaga(action) {
    try {
        const { payload } = action;
        const response = yield call(deleteArticle, payload);
        yield put(articlesActions.deleteArticleSuccess(response));
    } catch (e) {
        yield put(articlesActions.deleteArticleError(e));
    }
}

function* createArticleSaga(action) {
    try {
        const { payload } = action;
        const response = yield call(createArticle, payload);
        yield put(articlesActions.createArticleSuccess(response));
    } catch (e) {
        yield put(articlesActions.createArticleError(e));
    }
}

export function* articlesSagas() {
    yield takeEvery(
        articlesActions.getArticles.toString(),
        getArticlesSaga
    );

    yield takeEvery(
        articlesActions.getArticleById.toString(),
        getArticleByIdSaga
    );

    yield takeEvery(
        articlesActions.editArticle.toString(),
        editArticleSaga
    );

    yield takeEvery(
        articlesActions.deleteArticle.toString(),
        deleteArticleSaga
    );

    yield takeEvery(
        articlesActions.createArticle.toString(),
        createArticleSaga
    )
}