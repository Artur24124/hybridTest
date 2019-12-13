import { createActions } from 'redux-actions';

export const {
    getArticles,
    getArticlesSuccess,
    getArticlesError,
    getArticleById,
    getArticleByIdSuccess,
    getArticleByIdError,
    createArticle,
    createArticleSuccess,
    createArticleError,
    editArticle,
    editArticleSuccess,
    editArticleError,
    deleteArticle,
    deleteArticleSuccess,
    deleteArticleError
} = createActions(
    'GET_ARTICLES',
    'GET_ARTICLES_SUCCESS',
    'GET_ARTICLES_ERROR',
    'GET_ARTICLE_BY_ID',
    'GET_ARTICLE_BY_ID_SUCCESS',
    'GET_ARTICLE_BY_ID_ERROR',
    'CREATE_ARTICLE',
    'CREATE_ARTICLE_SUCCESS',
    'CREATE_ARTICLE_ERROR',
    'EDIT_ARTICLE',
    'EDIT_ARTICLE_SUCCESS',
    'EDIT_ARTICLE_ERROR',
    'DELETE_ARTICLE',
    'DELETE_ARTICLE_SUCCESS',
    'DELETE_ARTICLE_ERROR'
);