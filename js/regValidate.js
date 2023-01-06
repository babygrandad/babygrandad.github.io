//registration variables + form
regForm = document.getElementById('registerForm');
regName = document.getElementById('registerName');
regSurname = document.getElementById('registerSurname');
regDOB = document.getElementById('registerDOB');
regEmail = document.getElementById('registerEmail');
regPass = document.getElementById('registerPassword');


//registration field spans
regNameSpan = document.getElementById('registerNameSpan');
regSurnameSpan = document.getElementById('registerSurnameSpan');
regDOBSpan = document.getElementById('registerDOBSpan');
regEmailSpan = document.getElementById('registerEmailSpan');
regPassSpan = document.getElementById('registerPasswordSpan');


//actions
regForm.addEventListener('submit', (e) =>{
    

    //name check
    if(!regName.value){
        regNameSpan.innerText = "Fill in your name.";
        e.preventDefault();
    }else{
        regNameSpan.innerText = '';
    }

    //Surname check
    if(!regSurname.value){
        regSurnameSpan.innerText = "Fill in your Surname.";
        e.preventDefault();
    }else{
        regSurnameSpan.innerText = '';
    }

    //DOB check
    validateDOB(e)

    //email validatoin
    validateRegEmail(e);

    //Password check
    validateRegPass(e);
})

//functions

function validateRegPass(e){
    var passwordFormat = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/;
    if (regPass.value.match(passwordFormat)) {
        regPassSpan.innerText = '';
    return true
    } else {
        regPassSpan.innerText = "Make sure you password is 8 characters long, has at least 1 alphabet, 1 number, and 1 charachter."
        e.preventDefault()
    return false
    t = '';
    }
}

function validateRegEmail(e){
    var emailFormat = /^([a-z 0-9\.-]+)@([a-z 0-9-]+).([a-z]{2,8})?$/;
    if (regEmail.value.match(emailFormat)) {
        regEmailSpan.innerText = ""
    return true
    } else {
        regEmailSpan.innerText = "Invalid email address";
        e.preventDefault();
    return false
    }
}

function validateDOB(e){
    nowDate = new Date();
    regDate = new Date(regDOB.value)
    nowDate = nowDate.setHours(0, 0, 0, 0)
    regDate = regDate.setHours(0, 0, 0, 0)

    if(!regDOB.value){
        regDOBSpan.innerText = 'Select date of birth.';
        e.preventDefault();
    }
    else if (nowDate < regDate){
        regDOBSpan.innerText = 'Select a valid date.';
        e.preventDefault();
    }
    else{
        regDOBSpan.innerText = '';
    }
}

