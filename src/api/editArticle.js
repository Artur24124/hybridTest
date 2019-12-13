export const editArticle = (payload) => {
    let articles = JSON.parse(window.localStorage.getItem('articles'))
        .filter((article) => article.id !== payload.id);

    articles = [...articles, payload];

    window.localStorage.setItem('articles', JSON.stringify(articles));

    return payload;
};