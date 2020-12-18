function send(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var textarea = document.getElementById("textarea").value;

    if (firstname != "" && lastname != "" && email != "" && number != "" && textarea !="") {
        window.location = "../index.html";
    }
    else{
        alert("Please don't let any field blank");
    }
}