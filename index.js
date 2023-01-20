document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#submit').onclick = function validateInput() {
        const firstName = document.querySelector('#firstName');

        const middleName = document.querySelector('#middleName');

        const lastName = document.querySelector('#lastName');

        const koreanName = document.querySelector('#koreanName');

        const userName = document.querySelector('#userName');

        const emailAddress = document.querySelector('#emailAddress');

        const gender = document.querySelector('#gender');

        const phoneNumber = document.querySelector('#phoneNumber');

        const birthDate = document.querySelector('#birthDate');

        const country = document.querySelector('#country');

        const favoriteHolySong = document.querySelector('#favoriteHolySong');

        const faithExperience = document.querySelector('#faithExperience');

        const personalTrueParents = document.querySelector('#personalTrueParents');

        const password = document.querySelector('#password');

        const confirmPassword = document.querySelector('#confirmPassword');

        document.querySelectorAll('input').toLowerCase()

        if (firstName.value.length < 2) {
            alert("Please Enter your First Name!")
            return false;
        }

        else if (middleName.value.length < 2) {
            alert("Please Enter your Middle Name!")
            return false;
        }

        else if (lastName.value.length < 2) {
            alert("Please Enter your Last Name!")
            return false;
        }

        else if (koreanName.value.length < 3) {
            alert("Please Enter your Korean Name!")
            return false;
        }

        else if (userName.value.length < 5) {
            alert("Please Enter a proper Username!")
            return false;
        }

        else if (emailAddress.value.length < 10) {
            alert("Please Enter a valid Email Address!")
            return false;
        }

        else if (gender.value < 1) {
            alert("Please Select your Gender from the List!")
            console.log(gender)
            return false;
        }

        else if (gender.value != document.querySelector("#sex").option) {
            alert("Please Choose your Gender from the !")
            return false;
        }

        else if (phoneNumber.value.length < 7) {
            alert("Please Enter a valid Phone Number!")
            return false;
        }

        else if (birthDate.value.length < 10) {
            alert("Please Choose your Birthday from the Calendar!")
            return false;
        }

        else if (birthDate.value.length > 10) {
            alert("Please Check the Birthday you chose!")
            return false;
        }

        else if (country.value.length < 4) {
            alert("Please Choose your Country from the List!")
            return false;
        }

        else if (country.value.length > 27) {
            alert("Please Choose a Country from the List!")
            return false;
        }

        else if (favoriteHolySong.value.length < 12) {
            alert("Please Choose your Favorite Holy Song from the List provided!")
            return false;
        }

        else if (faithExperience.value == "") {
            alert("Please Enter a Special Experience during your of Faith!")
            return false;
        }

        else if (faithExperience.value.length < 210) {
            alert("Your Special Experience must be atleast 70 words!")
            return false;
        }

        else if (personalTrueParents.value == "") {
            alert("Please Enter your Personal Meaning of the True Parents!")
            return false;
        }

        else if (personalTrueParents.value.length < 40) {
            alert("Your personal meaning of the True Parents must be more than 10 words!")
            return false;
        }

        else if (password.value == "") {
            alert("Please Type a Password!")
            return false;
        }

        else if (password.value.length < 8) {
            alert("Your Password must be more than 10 Characters! \nPlease make sure your Password is a strong password, \nby including some symbols and change of cases!")
            return false;
        }

        else if (confirmPassword.value == "") {
            alert("Please Confirm your Password!")
            return false;
        }

        else if (password.value !== confirmPassword.value) {
            alert("Passwords didn't match! \nPlease Try again!")
            return false;
        }
    };
    
    document.querySelector('#eye1').onclick = () => {
        const password = document.querySelector('#password');

        if (password.type == "password") {
            password.type = "text"
        }

        else {
            password.type = "password"
        }
    }

    document.querySelector('#eye2').onclick = () => {
        const confirmPassword = document.querySelector('#confirmPassword');

        if (confirmPassword.type == "password") {
            confirmPassword.type = "text"
        }

        else {
            confirmPassword.type = "password"
        }
    }
});
