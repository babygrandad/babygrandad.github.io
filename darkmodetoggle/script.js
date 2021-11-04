function switchMode(){
    // toggle page to dark mode and back
    document.documentElement.classList.toggle('dark-mode');
    
    var x = document.getElementById("fspan");
    if (x.innerHTML === "light") {
    x.innerHTML = "dark";
    } else {
    x.innerHTML = "light";
    }

    var y = document.getElementById("sspan");
    if (y.innerHTML === "dark") {
    y.innerHTML = "light";
    } else {
    y.innerHTML = "dark";
    }

    var s = document.getElementById("toggler");
    if (s.value === "Dark Mode") {
    s.value = "Light Mode";
    } else {
    s.value = "Dark Mode";
    }

}