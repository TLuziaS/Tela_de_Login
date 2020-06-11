/* Mudança de Tela de Cadastro e Login*/
let btnLogin = document.querySelector("#login");
let btnSignup = document.querySelector("#signup");
let view = document.querySelector("body");


btnLogin.addEventListener("click", function () {
    view.className = "loginJs";
});

btnSignup.addEventListener("click", function () {
    view.className = "signupJs";
});
