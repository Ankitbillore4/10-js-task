

var isName = document.querySelector(".Name")
var Email = document.querySelector(".Email")
var Password = document.querySelector(".Password")
var Submit = document.querySelector(".Submit")
var nameError = document.querySelector(".nameError")
var EmailError = document.querySelector(".EmailError")
var PasswordError = document.querySelector(".PasswordError")
var form = document.querySelector(".form")

function formValidation() {
    form.addEventListener("submit", function (e) {

        var emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

        if (isName.value === "" || isName.value == null) {

            e.preventDefault();
            nameError.innerHTML = "Name Can't be blank "
        } else {
            nameError.innerHTML = ""
        }
        if (!Email.value.match(emailCheck)) {
            e.preventDefault();
            EmailError.innerHTML = "Valid Email is Required "
        } else {
            EmailError.innerHTML = " "

        }

        if (Password.value.length <= 5) {
            e.preventDefault();
            PasswordError.innerHTML = "Password must be more than 6 characters "
        } else {
            PasswordError.innerHTML = ""

        }
    })
}
formValidation()







