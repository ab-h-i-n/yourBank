

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

// unhide login page 

const loginBtnNav = document.querySelector('.login-signup-btn button:last-child');
const loginPage = document.querySelector('#loginPage');

loginBtnNav.addEventListener("click", () => {

    loginPage.classList.remove('hidden');
    if(!signupPage.classList.contains('hidden')){ signupPage.classList.add('hidden');}
})

// unhide signup page 

const signupBtnNav = document.querySelector('.login-signup-btn button:first-child');
const signupPage = document.querySelector('#siginupPage');

signupBtnNav.addEventListener("click", () => {

    signupPage.classList.remove('hidden');
    if(!loginPage.classList.contains('hidden')){loginPage.classList.add('hidden');}

})


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


// nav login button click 


const loginBtn = document.querySelectorAll('.sign-log-btn');

loginBtn.forEach((logbtn) => {

    logbtn.addEventListener("click", () => {

        document.getElementById('hero-section').classList.add('hidden');
        document.getElementById('our-service').classList.add('hidden');
        document.getElementById('usecases').classList.add('hidden');

    })
}
)

//home button 

const homebtn = document.querySelector('.home-btn');

homebtn.addEventListener("click", () => {

    document.getElementById('hero-section').classList.remove('hidden');
    document.getElementById('our-service').classList.remove('hidden');
    document.getElementById('usecases').classList.remove('hidden');

    if (!loginPage.classList.contains('hidden')) { loginPage.classList.add('hidden') }
    if (!signupPage.classList.contains('hidden')) { signupPage.classList.add('hidden') }

})

//form functions 

//pass unhide 

const eyeBtn = document.querySelector('#passHide');
const passInput = document.querySelector('.pass-input');

eyeBtn.addEventListener("click", () => {
    passInput.type = (passInput.type === 'password') ? 'text' : 'password';
});


//function btn click


const body = document.querySelector('body');
const fucBtns = document.querySelectorAll('.func-btn');
const popupCont = document.querySelector('.popup-container');

//show popup container 

fucBtns.forEach((fucBtn)=>{

    fucBtn.addEventListener("click",()=>{
        popupCont.classList.remove('hidden');
        body.classList.add('overflow-y-hidden');
    });

    switch (fucBtn.id) {
        case "deposit-btn":
            
            const depositForm = document.querySelector(`#deposit`);

            depositForm.classList.add('hidden');

            break;
        case "withdraw-btn":

            document.querySelector(`#withdraw`).classList.remove('hidden');

            break;

        case "account-details-btn":
            document.querySelector('#view-acc').classList.remove('hidden');
            break;
            
        case "check-balance":
            document.querySelector('#view-bal').classList.remove('hidden');
            break;

    
        default:
            break;
    }
})


const closeBtns = document.querySelectorAll('close-btn');

closeBtns.forEach((closeBtn)=>{

    closeBtn.addEventListener("click",()=>{

        popupCont.classList.remove('hidden');

    });
});