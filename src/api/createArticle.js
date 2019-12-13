export const createArticle = (payload) => {
    console.log(payload);
    let articles = JSON.parse(window.localStorage.getItem('articles'));

    articles = [...articles, payload];

    console.log(articles);

    window.localStorage.setItem('articles', JSON.stringify(articles));

    return payload;
};