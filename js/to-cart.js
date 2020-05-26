(function () {
    const elProdsParent = $('.prods');
    const cartBtns = $$('.prod__action--cart');
    const elCart = $('.cart');

    let lsProducts = localStorage.getItem('prods');
    let productCount = lsProducts ? lsProducts : 0;

    let lsIndexes = JSON.parse(localStorage.getItem('prodIndices'));
    let productIndexes = lsIndexes ? lsIndexes : [];

    let elCount = document.createElement('span');
    elCount.classList.add('product-count');
    elCart.appendChild(elCount);

    if (productCount) {
        elCount.innerHTML = productCount;
        elCount.style.display = 'inline-block';

        for (index of productIndexes) {
            cartBtns[index].classList.add('cart-button-clicked');
            cartBtns[index].disabled = true;
        }
    } else {
        elCount.style.display = 'none';
    }

    elProdsParent.addEventListener('click', function (e) {
        let target = e.target;

        if (!target.classList.contains('prod__action')) return;

        if (target.classList.contains('prod__action--cart')) {
            target.disabled = true;
            target.classList.add('cart-button-clicked');
            elCount.innerHTML = ++productCount;
            elCount.style.display = 'inline-block';

            let index = parseInt(target.dataset.id, 10);
            if (!productIndexes.includes(index)) productIndexes.push(index);

            localStorage.setItem('prods', productCount);
            localStorage.setItem('prodIndices', JSON.stringify(productIndexes));
        }
    });
})();