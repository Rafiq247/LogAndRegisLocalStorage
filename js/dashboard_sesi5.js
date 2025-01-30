"use strict";

document.title = "Day-15 Practice JS";

let pictureUser = document.getElementById('pictureUser');
let adminUser = document.getElementById('adminUser');
let spvUser = document.getElementById('spvUser');
let leaderUser = document.getElementById('leaderUser');
let pegawaiUser = document.getElementById('pegawaiUser');
const yourName = document.getElementById('yourName');

const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");
const fullName = `${firstName} ${lastName}`;

yourName.textContent = fullName;

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