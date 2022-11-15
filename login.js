 function validate() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    const user = {
        email: "akineeessential@gmail.com",
        password: "essential",
    };

    if (email == user.email && password == user.password) {
        alert("Login Successful");
        return false;
    } else{
        alert ("Incorrect email or password ")
        return false;
    }
    
}
 