export const deleteArticle = (payload) => {
    const articles = JSON.parse(window.localStorage.getItem('articles'))
        .filter((article) => article.id !== payload);

    window.localStorage.setItem('articles', JSON.stringify(articles));

    return payload;
};