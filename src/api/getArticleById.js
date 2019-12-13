export const getArticleById = (payload) => {
    const articles = JSON.parse(window.localStorage.getItem('articles'));

    return articles.filter((article) => article.id === payload)[0];
};