function register(){
    var fullname = document.getElementById("fullname").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var number = document.getElementById("number").value;

    if (fullname != "" && username != "" && email != "" && password != "" && address !="" && number !="" ) {
        window.location = "../index.html"
        
    }else{
        alert("Please put all info requared !")
    }
}