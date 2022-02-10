document.getElementById('login-submit').addEventListener("click", function () {
    // get user email
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    // get user password
    const userPassField = document.getElementById('user-pass');
    const userpass = userPassField.value;
    // check email and pass
    if (userEmail == 'sishahin093@gmail.com' && userpass == '103511') {
        window.location.href = "banking.html";
    } else {
        alert("user Email and password invilid");
    }
});



