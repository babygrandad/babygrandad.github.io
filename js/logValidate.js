logForm = document.getElementById("loginForm");
logEmail = document.getElementById("loginEmail");
logPass = document.getElementById("loginPassword");

logEmailSpan = document.getElementById("loginEmailSpan");
logPassSpan = document.getElementById("loginPasswordSpan");

logForm.addEventListener('submit', (e) =>{
   
    if(!logEmail.value){
        logEmailSpan.innerText = "You cannot leave this field empty.";
        e.preventDefault();
    }else{
        logEmailSpan.innerText = '';
    }

    if(!logPass.value){
        logPassSpan.innerText = "You cannot leave this field empty.";
        e.preventDefault();
    }else{
        logEmailSpan.innerText = '';
    }
    
})