(function () {
    const elArticle = $('.article');

    let articleData = JSON.parse(localStorage.getItem('newsInfo'));

    elArticle.querySelector('.article__title').innerHTML = articleData.title;
    elArticle.querySelector('.article__description').innerHTML = articleData.description;
    let time = elArticle.querySelector('.article__date time');
    time.innerHTML = moment.parseZone(articleData.publishedAt).format("YYYY-MM-DD HH:mm:ss");
    time.dateTime = articleData.publishedAt;
    elArticle.querySelector('.article__author').innerHTML = articleData.author ? articleData.author : 'newsAPI';
    elArticle.querySelector('.article__img').src = articleData.urlToImage ? articleData.urlToImage : '../img/news-img.jpg';
    elArticle.querySelector('.article__text p:first-child').innerHTML = articleData.content;
    let source = elArticle.querySelector('.article__source a');
    source.innerHTML = articleData.source.name ? articleData.source.name : 'newsAPI';
    source.href = articleData.url ? articleData.url : 'https://newsapi.org/';
})();