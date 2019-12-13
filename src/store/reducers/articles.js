import { handleActions } from 'redux-actions';
import * as articlesActions from '../actions/articles';

const initState = {
  articles: [],
  loading: false,
  articleById: null,
  error: null
};

export const articles = handleActions(
    {
        [articlesActions.getArticles]: (state, action) => {
            return {
                ...state,
                loading: true
            }
        },
        [articlesActions.getArticlesSuccess]: (state, action) => {
            return {
                ...state,
                loading: false,
                articles: action.payload
            }
        },
        [articlesActions.getArticlesError]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        [articlesActions.getArticleById]: (state, action) => {
            return state;
        },
        [articlesActions.getArticleByIdSuccess]: (state, action) => {
            return {
                ...state,
                articleById: action.payload
            }
        },
        [articlesActions.getArticleByIdError]: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        },
        [articlesActions.createArticle]: (state, action) => {
            return state;
        },
        [articlesActions.createArticleSuccess]: (state, action) => {
            return {
                ...state,
                articles: [...state.articles, action.payload]
            }
        },
        [articlesActions.createArticleError]: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        },
        [articlesActions.editArticle]: (state, action) => {
            return state
        },
        [articlesActions.editArticleSuccess]: (state, action) => {
            let articles = state.articles
                .filter((article) => article.id !== action.payload.id);
            articles = [...articles, action.payload];

            return {
                ...state,
                articles: articles
            }
        },
        [articlesActions.editArticleError]: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        },
        [articlesActions.deleteArticle]: (state, action) => {
            return state
        },
        [articlesActions.deleteArticleSuccess]: (state, action) => {
            return {
                ...state,
                articles: state.articles
                    .filter((article) => article.id !== action.payload)
            }
        },
        [articlesActions.deleteArticleError]: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        },
    },
    initState
);