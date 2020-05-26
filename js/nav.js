(function () {
    const menuOpener = $('.sitenav__menu-opener');
    const menu = $('.sitenav__list');

    function openMenu() {
        this.classList.toggle('active');

        function displayNone() {
            menu.style.display = 'none';

            menu.removeEventListener('transitionend', displayNone);
        }

        if (menu.style.maxHeight) {
            menu.style.maxHeight = '';
            menu.addEventListener('transitionend', displayNone);

        } else {
            menu.style.display = 'block';
            menu.style.maxHeight = menu.scrollHeight + 'px';
        }
    }

    menuOpener.addEventListener('click', debounce(openMenu, 150));
})();