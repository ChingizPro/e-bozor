(function () {
    const elPasswordInput = $$('.password-input');
    const elShowPassword = $$('.show-password');

    elShowPassword.forEach(show => {
        show.onclick = function () {
            let index = show.dataset.info;

            let targetInput = Array.from(elPasswordInput).find((input) => {
                return input.dataset.info === index;
            });

            if (targetInput.type === 'password') {
                this.classList.replace('fa-eye', 'fa-eye-slash');
                targetInput.type = 'text';
            }
            else {
                this.classList.replace('fa-eye-slash', 'fa-eye');
                targetInput.type = 'password';
            }
        };
    });
})();