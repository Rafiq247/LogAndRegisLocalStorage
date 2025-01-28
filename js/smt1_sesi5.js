"strict mode";
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
let inputFirstName = document.getElementById('inputFirstName');
let inputLastName = document.getElementById('inputLastName');
let pictureUser = document.getElementById('pictureUser');
const yourName = document.getElementById('yourName');
const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");
const fullName = `${firstName} ${lastName}`;
console.log(`Ini adalah data nama anda ${fullName}`);

let adminUser = document.getElementById('adminUser');
let spvUser = document.getElementById('spvUser');
let leaderUser = document.getElementById('leaderUser');
let pegawaiUser = document.getElementById('pegawaiUser');

let formInput = document.querySelector(".form-input");
let formButton = document.querySelector(".form-button");

pegawaiUser.style.display = "none";
leaderUser.style.display = "none";
spvUser.style.display = "none";
adminUser.style.display = "none";

yourName.textContent = fullName;

if (localStorage.getItem("role") == "admin") {
    adminUser.style.display = "block";
} else if (localStorage.getItem("role") == "supervisor") {
    spvUser.style.display = "block";
} else if (localStorage.getItem("role") == "leader") {
    leaderUser.style.display = "block";
} else {
    pegawaiUser.style.display = "block";
}

// console.log(pictureUser.src); 

if (localStorage.getItem("role") == "admin") {
    pictureUser.src = "/assets/profile1.jpg"
} else if (localStorage.getItem("role") == "supervisor") {
    pictureUser.src = "/assets/profile2.jpg"
} else if (localStorage.getItem("role") == "leader") {
    pictureUser.src = "/assets/profile3.png"
} else if (localStorage.getItem("role") == "pegawai") {
    pictureUser.src = "/assets/profile4.jpg"
} 

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

function onLogout() {
    localStorage.clear();
    window.location.href = "/index.html";
}