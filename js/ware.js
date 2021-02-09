(function () {
    const pics = $('.ware__pics');
    const coverPic = $('.ware__cover');
    const warePrice = $('.ware__price > strong');
    const warenumber = $('#ware__number');
    const wareButtons = $$('.ware__button');
    const warePlus = $('#ware__plus');
    const wareMinus = $('#ware__minus');

    pics.addEventListener('click', (evt) => {
        if (!evt.target.classList.contains('ware__pic')) return;
        if (evt.target.classList.contains('active-pic')) return;
        else {
            pics.querySelector('.active-pic').classList.remove('active-pic');
            evt.target.classList.add('active-pic');

            coverPic.style.opacity = 0.6;
            coverPic.addEventListener('transitionend', () => {
                coverPic.style.opacity = 1;
                coverPic.src = evt.target.src;
            });
        }
    });

    function priceWithSpace(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    warePrice.innerHTML = priceWithSpace(warePrice.innerHTML);

    warePlus.addEventListener('click', () => {
        warenumber.value++;
    });

    wareMinus.addEventListener('click', () => {
        if (warenumber.value <= 1) return;
        else {
            warenumber.value--;
        }
    });

    wareButtons.forEach(btn => {
        btn.addEventListener('keypress', (evt) => {
            if (evt.keyCode != 13) return;
            btn.style.transform = 'scale(0.9)';
        });
        btn.addEventListener('keyup', (evt) => {
            if (evt.keyCode != 13) return;
            btn.style.transform = 'scale(1)';
        });
    });
})();