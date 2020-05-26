(function () {
    // * scroll behaviour settings
    function scrollProgress() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        $('#progress').style.width = scrolled + '%';
    };

    window.onscroll = function () { scrollProgress() };
})();