(function () {
    const elNewsBoxWrap = $('.news-box-wrapper');
    const newsBoxTemplate = $('#news-box-teplate').content;
    const elLoader = $('.wrapper');

    let starterKey = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6f93a29bbf3d47c1ae24ae9b5fa197cc&category=technology&pageSize=26';

    function error(error) {
        alert(error);
    }

    function success(response) {
        if (response.totalResults < 1) {
            elNewsBoxWrap.innerHTML = 'Sorry no matches found! :(';
            return;
        }

        elNewsBoxWrap.innerHTML = '';
        let newsBoxFragment = document.createDocumentFragment();
        let articles = response.articles;

        articles.forEach((article, index) => {
            let newsBoxTemplateClone = newsBoxTemplate.cloneNode(true);
            let img = newsBoxTemplateClone.querySelector('.news-box__img');
            img.src = article.urlToImage ? article.urlToImage : '../img/news-img.jpg';
            img.dataset.index = index;
            let title = newsBoxTemplateClone.querySelector('.news-box__title')
            title.innerHTML = article.title;
            title.dataset.index = index;
            let time = newsBoxTemplateClone.querySelector('.news-box__date time');
            time.innerHTML = moment.parseZone(article.publishedAt).format("YYYY-MM-DD HH:mm:ss");
            time.dateTime = article.publishedAt;
            newsBoxTemplateClone.querySelector('.news-box__author').innerHTML = article.author ? article.author : 'newsAPI';
            newsBoxTemplateClone.querySelector('.news-box__description').innerHTML = article.description;

            newsBoxFragment.appendChild(newsBoxTemplateClone);

            elLoader.remove();
        });

        elNewsBoxWrap.appendChild(newsBoxFragment);

        let isPageOpen = 'false';

        elNewsBoxWrap.addEventListener('click', function (evt) {
            if (evt.target.tagName != 'IMG' && evt.target.tagName != 'H3') return;

            let index = evt.target.dataset.index;
            localStorage.setItem("newsInfo", JSON.stringify(articles[index]));

            if (!isPageOpen) {
                myWindow = window.open('../html/news-single.html');
                isPageOpen = true;
            } else {
                window.open('../html/news-single.html', 'news-single');
            }
        });
    }

    load(starterKey, success, error);

    // ! loader

    // ! search 
    const elForm = $('.siteheader__search');
    const elInput = $('.siteheader__search--input');

    elForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let searchKey = elInput.value;
        elInput.value = '';

        let key = `https://newsapi.org/v2/everything?apiKey=6f93a29bbf3d47c1ae24ae9b5fa197cc&pageSize=26&language=en&qInTitle=${searchKey}`;

        load(key, success, error);
    });

})();