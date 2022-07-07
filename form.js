let password = document.getElementById("user_password");
let passConfirmed = document.getElementById("confirm_password");
let submit = document.getElementById("submit");
let form = document.getElementById("form");


passConfirmed.onblur = function(){
    if( password.value !== passConfirmed.value){
        submit.textContent = "Unmatched Password";
        form.action = "";    
        submit.onmouseover = function(){
            submit.textContent = " Click to try again!!";
        }
    }
}