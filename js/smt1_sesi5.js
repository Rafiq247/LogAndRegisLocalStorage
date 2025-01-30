"use strict";
/*
MATERI TENTANG PENYIMPANAN DATA DI LOCALSTORAGE BROWSER

TUGAS:
1. TAMBAHKAN ROLE BARU SEBANYAK YG KALIAN MAU
2. TAMPILKAN SESUATU HAL YG BERBEDA DI SETIAP DASHBOARD ROLE NYA
3. BIKIN REGISTER / MENU PENDAFTARAN. JADI HANYA BISA USER TERDAFTAR YANG ADA DI STORAGE YANG BISA LOGIN
**/

document.title = "Day-15 Practice JS";
let body = document.body;

let loginUsername = document.getElementById('loginUsername');
let loginPassword = document.getElementById('loginPassword');
let restartMode = document.getElementById('restartMode');
let remainingLeftDarkMode = document.getElementById('remainingLeftDarkMode');

let countLimit = 0;
let darkModeLimit = 5;
let remainingLeft;

restartMode.style.display = "none";

function onLogin() {
    if (localStorage.getItem("username") == loginUsername.value && localStorage.getItem("password") == loginPassword.value) {
        window.location.href = "/pages/dashboard.html";

        // localStorage.clear();
        if (localStorage.getItem("role") == "admin") {
            alert("Anda login sebagai admin");
            // adminUser.style.display = "block";
        } else if (localStorage.getItem("role") == "supervisor") {
            alert("Anda login sebagai supervisor");
            // spvUser.style.display = "block";
        } else if (localStorage.getItem("role") == "leader") {
            alert("Anda login sebagai leader");
            // leaderUser.style.display = "block";
        } else if (localStorage.getItem("role") == "pegawai") {
            alert("Anda login sebagai pegawai");
            // pegawaiUser.style.display = "block";
        } else {
            alert("Tidak ada data pegawai!");
        }
    } else {
        alert("Your Username or Password Wrong!");
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