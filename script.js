let password = document.getElementById("pass");
let result = document.getElementById("result");
let toggle = document.getElementById("toggle");

//  Show/Hide password
toggle.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "Hide";
    } else {
        password.type = "password";
        toggle.textContent = "Show";
    }
};

//  Password strength checker
password.onkeyup = function () {
    let value = password.value;
    let strength = 0;

    if (value.length >= 8) strength++;
    if (value.length >= 12) strength++;
    if (/[a-z]/.test(value)) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) strength++;

    let weakPatterns = ["123456", "password", "qwerty", "111111", "abc123"];

    if (weakPatterns.includes(value.toLowerCase())) {
        result.innerHTML = "Very Weak Password ❌";
        result.style.color = "red";
        return;
    }

    if (strength <= 2) {
        result.innerHTML = "Weak Password 🔴";
        result.style.color = "red";
    }
    else if (strength <= 4) {
        result.innerHTML = "Medium Password 🟠";
        result.style.color = "orange";
    }
    else if (strength <= 6) {
        result.innerHTML = "Strong Password 🟢";
        result.style.color = "green";
    }
    else {
        result.innerHTML = "VERY STRONG PASSWORD 🔥🔥";
        result.style.color = "darkgreen";
    }
};