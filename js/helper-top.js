(function () {
    const elHelperTopDropdown = document.querySelector('.lang');
    const elHelperTopDropdownParent = document.querySelector('.helper__dropdown');
    const elDropdownButton = document.querySelector('.helper__button');

    // * activating chosen language
    const langs = $('.lang');

    let activeLang = elHelperTopDropdown.querySelector('[data-lang=uz]');
    activeLang.classList.add('active-lang');

    langs.addEventListener('click', function (evt) {
        let target = evt.target;
        let active = langs.querySelector('.active-lang')

        if (target === active || target.nodeName != 'A') return;

        active.classList.remove('active-lang');
        target.classList.add('active-lang');
    });

    // ? *************************
    function removeHelperClasses() {
        elHelperTopDropdown.classList.remove('height-up', 'height-down');
        elHelperTopDropdown.removeEventListener('animationend', removeHelperClasses);
    }

    function handleMenu() {
        if (!elHelperTopDropdown.classList.contains('height-up')) {
            elHelperTopDropdown.classList.add('height-up');
            elHelperTopDropdownParent.classList.add('color-green');
        } else {
            elHelperTopDropdown.classList.add('height-down');
            elHelperTopDropdown.addEventListener('animationend', removeHelperClasses);
            elHelperTopDropdownParent.classList.remove('color-green');
        }
    }

    window.addEventListener('click', (e) => {
        if (!elHelperTopDropdown.classList.contains('height-up') || e.target.matches('.helper__dropdown-item > a')) return;

        if (!e.target.matches('.helper__button') && !e.target.matches('.helper__dropdown--icon ')) {
            handleMenu();
        }
    });

    elDropdownButton.addEventListener('click', debounce(handleMenu, 250));
})();