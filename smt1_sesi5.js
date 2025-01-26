/*
MATERI TENTANG PENYIMPANAN DATA DI LOCALSTORAGE BROWSER

TUGAS:
1. TAMBAHKAN ROLE BARU SEBANYAK YG KALIAN MAU
2. TAMPILKAN SESUATU HAL YG BERBEDA DI SETIAP DASHBOARD ROLE NYA
3. BIKIN REGISTER / MENU PENDAFTARAN. JADI HANYA BISA USER TERDAFTAR YANG ADA DI STORAGE YANG BISA LOGIN
**/

document.title = "Day-12 Practice JS";

let loginUsername = document.getElementById('loginUsername');
let loginPassword = document.getElementById('loginPassword');
let regisUsername = document.getElementById('regisUsername');
let regisPassword = document.getElementById('regisPassword');

let adminUser = document.getElementById('adminUser');
let spvUser = document.getElementById('spvUser');
let leaderUser = document.getElementById('leaderUser');
let pegawaiUser = document.getElementById('pegawaiUser');

let formInput = document.querySelector(".form-input");
let formButton = document.querySelector(".form-button");

pegawaiUser.style.display = "none"
leaderUser.style.display = "none"
spvUser.style.display = "none"
adminUser.style.display = "none"

function onRegister() {
    localStorage.setItem("username", regisUsername.value);
    localStorage.setItem("password", regisPassword.value);
    
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
    if (regisUsername.value == "andri" && regisPassword.value == "admin123") {
        localStorage.setItem("role", "admin");
        alert("Congratulation! Your account has to been created");
        window.location.href = "/index.html";
    } else if (regisUsername.value == "rafiq" && regisPassword.value == "spv12345") {
        localStorage.setItem("role", "supervisor")
        alert("Congratulation! Your account has to been created");
        window.location.href = "/index.html";
    } else if (regisUsername.value == "ahara" && regisPassword.value == "leader111") {
        localStorage.setItem("role", "leader");
        alert("Congratulation! Your account has to been created");
        window.location.href = "/index.html";
    } else if (regisUsername.value && regisPassword.value) {
        localStorage.setItem("role", "pegawai");
        alert("Congratulation! Your account has to been created");
        window.location.href = "/index.html";
    } else {
        alert("First input your Username and Password!")
        localStorage.clear();
        location.reload();
    }
}

function onLogin() {
    if (localStorage.getItem("username") && localStorage.getItem("password") == loginPassword.value && localStorage.getItem("role") == "admin") {
        alert("login sebagai admin");
        adminUser.style.display = "block";
        formInput.style.display = "none";
        formButton.style.display = "none";
        localStorage.clear();
    } else if (localStorage.getItem("username") && localStorage.getItem("password") == loginPassword.value && localStorage.getItem("role") == "supervisor") {
        alert("login sebagai supervisor");
        spvUser.style.display = "block";
        formInput.style.display = "none";
        formButton.style.display = "none";
        localStorage.clear();
    } else if (localStorage.getItem("username") && localStorage.getItem("password") == loginPassword.value && localStorage.getItem("role") == "leader") {
        alert("login sebagai leader");
        leaderUser.style.display = "block";
        formInput.style.display = "none";
        formButton.style.display = "none";
        localStorage.clear();
    } else if (localStorage.getItem("username") && localStorage.getItem("password") == loginPassword.value && localStorage.getItem("role") == "pegawai") {
        alert("login sebagai pegawai");
        pegawaiUser.style.display = "block";
        formInput.style.display = "none";
        formButton.style.display = "none";
        localStorage.clear();
    } else {
        alert("Tidak ada data pegawai!");
        location.reload();
    }
}

function onLogout() {
    localStorage.clear();
    location.reload();
}
