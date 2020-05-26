(function () {
    const elHelper = $('.helper');
    const elSiteheader = $('.siteheader');
    const elSitenav = $('.sitenav');

    let heightLimit = parseInt(elHelper.scrollHeight, 10) + parseInt(elSiteheader.scrollHeight, 10) + parseInt(elSitenav.scrollHeight, 10) + 10;

    function checkScroll() {
        if (window.innerWidth < 1001) {
            elSitenav.classList.remove('sitenav-fixed');
            document.body.style.marginTop = 0;
            return;
        }

        if (scrollY > heightLimit) {
            let height = elSitenav.scrollHeight;
            elSitenav.classList.add('sitenav-fixed');
            document.body.style.marginTop = height + 'px';
        } else {
            elSitenav.classList.remove('sitenav-fixed');
            document.body.style.marginTop = 0;
        }
    };

    window.addEventListener('scroll', debounce(checkScroll, 50));
})();