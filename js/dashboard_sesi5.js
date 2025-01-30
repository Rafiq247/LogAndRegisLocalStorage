"use strict";

document.title = "Day-15 Practice JS";
let body = document.body;

let pictureUser = document.getElementById('pictureUser');
let adminUser = document.getElementById('adminUser');
let spvUser = document.getElementById('spvUser');
let leaderUser = document.getElementById('leaderUser');
let pegawaiUser = document.getElementById('pegawaiUser');
const yourName = document.getElementById('yourName');
let restartMode = document.getElementById('restartMode');
let remainingLeftDarkMode = document.getElementById('remainingLeftDarkMode');

let countLimit = 0;
let darkModeLimit = 5;
let remainingLeft;

const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");
const fullName = `${firstName} ${lastName}`;

yourName.textContent = fullName;

restartMode.style.display = "none";
pegawaiUser.style.display = "none";
leaderUser.style.display = "none";
spvUser.style.display = "none";
adminUser.style.display = "none";

if (localStorage.getItem("role") == "admin") {
    adminUser.style.display = "block";
    pictureUser.src = "/assets/profile1.jpg"
} else if (localStorage.getItem("role") == "supervisor") {
    spvUser.style.display = "block";
    pictureUser.src = "/assets/profile2.jpg"
} else if (localStorage.getItem("role") == "leader") {
    leaderUser.style.display = "block";
    pictureUser.src = "/assets/profile3.png"
} else {
    pegawaiUser.style.display = "block";
    pictureUser.src = "/assets/profile4.jpg"
}

function onLogout() {
    localStorage.clear();
    window.location.href = "/index.html";
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