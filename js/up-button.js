(function () {
    // ? up button
    const elUpButton = $('#up');

    function checkScroll() {
        let height = window.scrollY;

        if (height > 900) {
            elUpButton.style.display = 'inline-flex';
        } else {
            elUpButton.style.display = 'none';
        }
    };

    window.addEventListener('scroll', debounce(checkScroll, 100));
})();