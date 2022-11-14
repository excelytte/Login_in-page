  var submit = document.getElementById("submit");



  const user = {
    email: "akineeessential@gmail.com",
    password: "essential",
};

submit.addEventListener('click', ()=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
   

    if (username == user.email && password == user.password) {
        alert("Login Successful");
        return false;
    } else{
        alert ("Incorrect email or password ")
        return false;
    }
    console.log (email);
})