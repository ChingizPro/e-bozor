(function () {
    const menuOpener = $('.more-item button');
    let itemsToHide = $$('.hidden-item');

    let allItems = $$('.menu__item');

    allItems = Array.from(allItems).filter((a) => {
        return !Array.from(itemsToHide).includes(a);
    });

    function checkWindow(size) {
        if (size.matches) console.log('o\'xshadi');
        else console.log('o\'xshamadi');
    }

    function check() {
        let size = window.innerWidth;
        if (size > 1000) {
            for (let i = 5; i < allItems.length - 1; i++) {
                const element = allItems[i];
                element.classList.remove('hidden-item');

                itemsToHide = $$('.hidden-item');
            }
        } else {
            for (let i = 5; i < allItems.length - 1; i++) {
                const element = allItems[i];
                element.classList.add('hidden-item');

                itemsToHide = $$('.hidden-item');
            }
        }
    }

    window.addEventListener('resize', debounce(check, 150));
    window.addEventListener('load', check);

    function openMenu() {
        let icon = this.querySelector('i');
        let buttonText = this.querySelector('.more-item__text');

        if (icon.classList.contains('fa-plus')) {
            icon.classList.replace('fa-plus', 'fa-minus');
            buttonText.textContent = 'Yopish';
        } else {
            icon.classList.replace('fa-minus', 'fa-plus');
            buttonText.textContent = 'Qo\'shimcha';
        }

        function hideItem() {
            this.style.display = 'none';
            this.removeEventListener('transitionend', hideItem);
        }

        itemsToHide.forEach(item => {
            if (item.style.maxHeight) {
                item.style.maxHeight = '';
                item.style.opacity = 0;

                item.addEventListener('transitionend', hideItem);
            } else {
                item.style.cssText = 'display: block; opacity: 1;';
                item.style.maxHeight = item.scrollHeight + 'px';
            }
        });
    }

    menuOpener.addEventListener('click', debounce(openMenu, 220));
})();