

// passwordField check by user fn
const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".password-toggle-icon i");

togglePassword.addEventListener("click", function () {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
});
// passwordField check by user fn end



// verify container function start
function email_verify() {
    let hide1 = document.querySelector(".verifying-email");
    hide1.style.display = "none";
    const hide = document.querySelector(".verify-mobile-container");
    hide.classList.remove(("verify-class"))
    const verify = document.querySelector(".verify-email-container");
    verify.classList.add("verify-class");
    console.log(hide1);
    console.log(hide);
    console.log(verify);

}

function mobile_verify() {
    let hide1 = document.querySelector(".verifying-mobile");
    hide1.style.display = "none";
    const hide = document.querySelector(".verify-email-container");
    hide.classList.remove(("verify-class"))
    const verify = document.querySelector(".verify-mobile-container");
    verify.classList.add("verify-class");
    console.log(verify);
}

function emailconfirm() {
    let checkIcon = document.querySelector(".emailcheckicon").style.display = "block";
    let hide = document.querySelector(".verify-email-container");
    hide.classList.remove(("verify-class"))
    console.log(checkIcon);
}

function mobileconfirm() {
    let checkIcon = document.querySelector(".mobilecheckicon").style.display = "block";
    let hide = document.querySelector(".verify-mobile-container");
    hide.classList.remove(("verify-class"))
    console.log(checkIcon);
}



// verify container function end




// OTP side shifting input field function

document.addEventListener("DOMContentLoaded", function (event) {

    function OTPInput() {
        const inputs = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('keydown', function (event) {
                if (event.key === "Backspace") {
                    inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus();
                } else {
                    if (i === inputs.length - 1 && inputs[i].value !== '') { return true; }
                    else if (event.keyCode > 47 && event.keyCode < 58) {
                        inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();

                    } else if (event.keyCode > 64 && event.keyCode < 91) {
                        inputs[i].value = String.fromCharCode(event.keyCode);
                        if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
                    }
                }
            });
        }
    } OTPInput();
});

