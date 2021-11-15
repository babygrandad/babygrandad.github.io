function logValidate()
{
    var username = document.getElementById("luname");
    var password = document.getElementById("lpass");

    if(username.value.trim() =="" || (password.value.trim())=="")
    {
        alert("Invalid Username or Password.");
        return false;
    }
    else
    {
        true;
    }
}


// #### validate username 
// #### validate cellnumber
// ####    make sure its numbers only
// ####    make sure its a certain format
// #### validate email
// ####    make its in email format
// #### validate password 
// ####    make sure its 8 charachters long 
// ####   make sure it matches the reqierments
// #### validate confirmPassword 
// ####    make sure it matches password 
// return true conditions to original color

function colorChange(){
    var username = document.getElementById("sUname");
    var password = document.getElementById("sPass");
    var confirmPassword = document.getElementById("sPassConfirm");
    var cell = document.getElementById("cellNum");
    var email = document.getElementById("emailAdr");
   
    if(username.value !==""){
        username.style.border = "Solid 3px #0068FA";
    }

    if((cell.value !=="")){
        cell.style.border = "Solid 3px #0068FA";

    }
    if((email.value !=="")){
        email.style.border = "Solid 3px #0068FA";


    }
    if(password.value !==""){
        password.style.border = "Solid 3px #0068FA";

    }

    if(confirmPassword.value === password.valu){
        confirmPassword.style.border = "Solid 3px #0068FA";
    }

}

function signValidate(){
    var username = document.getElementById("sUname");
    var password = document.getElementById("sPass");
    var confirmPassword = document.getElementById("sPassConfirm");
    var cell = document.getElementById("cellNum");
    var email = document.getElementById("emailAdr");
    var celex = /^[0][6-8]\d{8}$/;
    var mailex = /^([a-z A-Z 0-9 \. -]+)@([a-z A-Z 0-9 -]+).([a-z A-Z]{2,20})(.[a-z]{2,20})$/;
    var passex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    
    if(username.value.trim() =="")
    {
        alert("Username can not be left blank.");
        username.style.border = "Solid 3px #FA0004";
        return false;
    }
    else if(celex.test(cell.value) == false)
    {
        alert("invalid cell number");
        cell.style.border = "Solid 3px #FA0004";
        return false
    }
    else if(mailex.test(email.value) == false)
    {
        alert("invalid email address");
        email.style.border = "Solid 3px #FA0004";
        return false
    }
    else if(passex.test(password.value.trim()) == false)
    {
        alert("Password does not meet minimum saftey requierment.");
        password.style.border = "Solid 3px #FA0004";
        return false
    }
    else if(password.value.trim() !== confirmPassword.value.trim())
    {
        alert("Passwords do not match.");
        password.style.border = "Solid 3px #FA0004";
        confirmPassword.style.border = "Solid 3px #FA0004";
        return false;
    }
    else{

        true;
    }

}

