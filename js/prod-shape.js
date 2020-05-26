(function () {
    const elProdsContainer = $('.prods');
    const elProds = $$('.prod');
    const elMyProdsButtons = $('.myprods__buttons');
    const elProdsButtons = $$('.myprods__button');
    const elProdsHorizontalButton = $('.myprods__horizontal-button');
    const elProdsDefaultButton = $('.myprods__default-button');

    elProdsDefaultButton.classList.add('prods-active-button');

    function activateButton(btn) {
        let active = elMyProdsButtons.querySelector('.prods-active-button');
        active.classList.remove('prods-active-button');
        btn.classList.add('prods-active-button');
        whichBtn();
    }

    let activeDesignBtn = (localStorage.getItem('btnIndex')) ? localStorage.getItem('btnIndex') : 0;

    if (activeDesignBtn) {
        activeDesignBtn = parseInt(activeDesignBtn, 10);
        let btnToActivate = elProdsButtons[activeDesignBtn];
        activateButton(btnToActivate);
    }

    function dView() {
        elProdsContainer.classList.remove('prods-horizontal');

        elProds.forEach(prod => {
            prod.classList.remove('prod-horizontal');
        });
    }

    function hView() {
        elProdsContainer.classList.add('prods-horizontal');

        elProds.forEach(prod => {
            prod.classList.add('prod-horizontal');
        });
    }

    function whichBtn() {
        let id = elMyProdsButtons.querySelector('.prods-active-button').dataset.num;
        localStorage.setItem('btnIndex', id);
    }

    function removeHorizontalView() {
        if (window.innerWidth > 650) {
            elProdsHorizontalButton.addEventListener('click', hView);

            elProdsDefaultButton.addEventListener('click', dView);

            elProdsButtons.forEach((btn) => {
                btn.addEventListener('click', () => {
                    activateButton(btn);
                });
            });

            elMyProdsButtons.style.display = 'block';

            if (elMyProdsButtons.querySelector('.prods-active-button').classList.contains('myprods__horizontal-button')) {
                elProdsContainer.classList.add('prods-horizontal');

                elProds.forEach(prod => {
                    prod.classList.add('prod-horizontal');
                });
            }
        } else {
            elMyProdsButtons.style.display = 'none';
            elProdsContainer.classList.remove('prods-horizontal');

            elProds.forEach(prod => {
                prod.classList.remove('prod-horizontal');
            });
        }
    }

    window.addEventListener('resize', debounce(removeHorizontalView, 15));
    window.addEventListener('load', debounce(removeHorizontalView, 15));
})();