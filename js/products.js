(function () {
    // ? for products
    const elProductsParent = $('.products');
    const cartBtns = $$('.product__action--cart');
    const elCart = $('.cart');

    let lsProducts = localStorage.getItem('products');
    let productCount = lsProducts ? lsProducts : 0;

    let lsIndexes = JSON.parse(localStorage.getItem('indexes'));
    let productIndexes = lsIndexes ? lsIndexes : [];

    // ? for discounts
    const elProdsParent = $('.articles');
    const cartButtons = $$('.to-cart');

    let lsIndices = JSON.parse(localStorage.getItem('prodIndices'));
    let productIndices = lsIndices ? lsIndices : [];

    let elCount = document.createElement('span');
    elCount.classList.add('product-count');
    elCart.appendChild(elCount);

    if (productCount) {
        elCount.innerHTML = productCount;
        elCount.style.display = 'inline-block';

        if (productIndices) {
            for (index of productIndices) {
                cartButtons[index].classList.add('cart-button-clicked');
                cartButtons[index].disabled = true;
            }
        }

        if (productIndexes) {
            for (index of productIndexes) {
                cartBtns[index].classList.add('cart-button-clicked');
                cartBtns[index].disabled = true;
            }
        }

    } else {
        elCount.style.display = 'none';
    }

    // ? for the products
    elProductsParent.addEventListener('click', function (e) {
        let target = e.target;

        if (!target.classList.contains('product__action')) return;

        if (target.classList.contains('product__action--cart')) {
            target.disabled = true;
            target.classList.add('cart-button-clicked');
            elCount.innerHTML = ++productCount;
            elCount.style.display = 'inline-block';

            let index = parseInt(target.dataset.number, 10);
            if (!productIndexes.includes(index)) productIndexes.push(index);

            localStorage.setItem('products', productCount);
            localStorage.setItem('indexes', JSON.stringify(productIndexes));
        }
    });

    // ! for the discounts
    elProdsParent.addEventListener('click', function (e) {
        let target = e.target;

        if (!target.classList.contains('discount__action')) return;

        if (target.classList.contains('to-cart')) {
            target.disabled = true;
            target.classList.add('cart-button-clicked');
            elCount.innerHTML = ++productCount;
            elCount.style.display = 'inline-block';

            let index = parseInt(target.dataset.id, 10);
            if (!productIndices.includes(index)) productIndices.push(index);

            localStorage.setItem('products', productCount);
            localStorage.setItem('prodIndices', JSON.stringify(productIndices));
        }
    });
})();