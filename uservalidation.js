function validateUsername() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("invalid_username");
    var passwordError = document.getElementById("invalid_password");
    usernameError.innerHTML="";
    passwordError.innerHTML="";
    var expr = /^[a-zA-Z0-9_]{6,20}$/;
    var expr2 = /^[a-zA-Z0-9_$%@!#^&]{8,20}$/;
    if ( !expr.test(username)) {
        usernameError.innerHTML= "Only Alphabets, Numbers and Underscore and between 6 to 20 characters.";
    } else if (!expr2.test(password)) {
        passwordError.innerHTML= "A password must contain Upper Case, Lower Case, Numbers and between 8 to 20 characters.";
    } else {
        window.location.href = "/member.html";
    }
}