const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const forgetBtn = document.querySelector("label.forget");
const forgetLink = document.querySelector("form .pass-link a");

signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-58%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
forgetBtn.onclick = (() => {
    loginForm.style.marginLeft = "-100%"
    loginText.style.marginLeft = "-108%"
})
signupLink.onclick = (() => {
    signupBtn.click();
    return false;

});
forgetLink.onclick = (() => {
    forgetBtn.click();
    return false;
});