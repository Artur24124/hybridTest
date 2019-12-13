export const getArticles = (payload) => {
    return JSON.parse(window.localStorage.getItem('articles'));
};