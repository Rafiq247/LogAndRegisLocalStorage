"use strict";

document.title = "Day-15 Practice JS";
let body =  document.body;

let regisUsername = document.getElementById('regisUsername');
let regisPassword = document.getElementById('regisPassword');
let inputFirstName = document.getElementById('inputFirstName');
let inputLastName = document.getElementById('inputLastName');
let restartMode = document.getElementById('restartMode');
let remainingLeftDarkMode = document.getElementById('remainingLeftDarkMode');

let countLimit = 0;
let darkModeLimit = 5;
let remainingLeft;

restartMode.style.display = "none";

function onRegister() {
    localStorage.setItem("username", regisUsername.value);
    localStorage.setItem("password", regisPassword.value);
    localStorage.setItem("firstName", inputFirstName.value);
    localStorage.setItem("lastName", inputLastName.value);

    // Ini cara ke-1 menggunakan switch:
    // switch(loginUsername.value && loginPassword.value) {
    //     case "andri" && "admin123":
    //         localStorage.setItem("role", "admin");
    //         console.log(localStorage);
    //     break
    //     case "rafiq" && "spv12345":
    //         localStorage.setItem("role", "supervisor");
    //         console.log(localStorage);
    //     break
    //     default:
    //         localStorage.setItem("role", "pegawai");
    //         console.log(localStorage);
    //     break
    // }

    // Ini cara ke-2 menggunakan if else:
    // Note: Ini hanya simulasi ketika ada beberapa akun pegawai dengan berbagai role yang berbeda yang bisa dibuatkan oleh si pengembang itu sendiri atau si usernya sendiri yang membuat akun tersebut.
    if (regisUsername.value == "andri" && regisPassword.value == "admin123" && inputFirstName.value && inputLastName.value) {
        localStorage.setItem("role", "admin");
        alert("Congratulation! Your account has to been created");
        window.location.href = "/index.html";
    } else if (regisUsername.value == "rafiq" && regisPassword.value == "spv12345" && inputFirstName.value && inputLastName.value) {
        localStorage.setItem("role", "supervisor")
        alert("Congratulation! Your account has to been created");
        window.location.href = "/index.html";
    } else if (regisUsername.value == "ahara" && regisPassword.value == "leader111" && inputFirstName.value && inputLastName.value) {
        localStorage.setItem("role", "leader");
        alert("Congratulation! Your account has to been created");
        window.location.href = "/index.html";
    } else if (regisUsername.value && regisPassword.value && inputFirstName.value && inputLastName.value) {
        localStorage.setItem("role", "pegawai");
        alert("Congratulation! Your account has to been created");
        window.location.href = "/index.html";
    } else {
        alert("Make sure all data is filled in!")
        localStorage.clear();
        location.reload();
    }
}

//Semester 1 - Sesi 6
function onDark() {
    countLimit += 1;
    remainingLeft = darkModeLimit - countLimit;
    remainingLeftDarkMode.textContent = `Remaining left your dark mode is ${remainingLeft}x `;

    if (countLimit >= darkModeLimit || remainingLeft == 0) {
        remainingLeftDarkMode.textContent = `Your dark mode has run out`;
        restartMode.style.display = "inline-block";
        return;
    }

    body.classList.toggle('dark');
}

function onRestart() {
    location.reload();
}