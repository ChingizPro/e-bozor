(function () {
    window.load = function (url, onSuccess, onError) {
        var xhr = new XMLHttpRequest(); // XML HTTP so'rov

        xhr.responseType = 'json'; // javob turi: JSON, HTML, XML, GraphQL

        xhr.addEventListener('load', function () {
            if (xhr.status === 200) {
                onSuccess(xhr.response);
            } else {
                onError('Javob statusi: ' + xhr.status + ' ' + xhr.statusText);
            }
        });

        xhr.addEventListener('error', function () {
            onError('Bog\'lanishda muammo!');
        });

        xhr.addEventListener('timeout', function () {
            onError('So\'rov ' + xhr.timeout + ' ms ichida bajarilishga ulgurmadi.');
        });

        xhr.timeout = 10000;

        xhr.open('GET', url);
        xhr.send();
    };
})();