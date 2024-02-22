

// login-signup-btn

const loginSignupBtns = document.querySelectorAll('.login-signup-btn button');

loginSignupBtns.forEach((btn) => {
    
    btn.addEventListener("click", () => {

        loginSignupBtns.forEach((b) => {
            b.classList.remove('text-[#1C1C1C]');
            b.classList.remove('bg-[#CAFF33]');
        });

        btn.classList.add('text-[#1C1C1C]');
        btn.classList.add('bg-[#CAFF33]');

    });

});


//nav bar links buttons

const linkBtns = document.querySelectorAll('.link-btns li a');

linkBtns.forEach((btn) => {
    
    btn.addEventListener("click", () => {

        linkBtns.forEach((b) => {
            b.classList.remove('bg-[#262626]');
        });

        btn.classList.add('bg-[#262626]');

    });

});