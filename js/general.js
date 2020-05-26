(function () {
    // !footer email
    const footerEmail = $('#newsletter__email');
    const footerEmailPlaceholder = $('.newsletter__email-placeholder');

    footerEmail.addEventListener('keyup', function () {
        let length = parseInt(footerEmail.value.length, 10);

        if (length >= 1) {
            footerEmailPlaceholder.classList.add('pl-class');
        } else {
            footerEmailPlaceholder.classList.remove('pl-class');
        }
    });

    // ! footer checkbox
    const footerPrivacyCheckbox = $('#newsletter__privacy');
    const footerPrivacyCheckboxWrap = $('.newsletter__privacy-wrap');

    footerPrivacyCheckbox.onfocus = function () {
        footerPrivacyCheckboxWrap.style.boxShadow = '0 0 3px 1px aqua';
    }

    footerPrivacyCheckbox.onblur = function () {
        footerPrivacyCheckboxWrap.style.boxShadow = 'none';
    }
})();