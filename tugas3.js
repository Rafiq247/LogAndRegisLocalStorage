"use strict";

// PENGGUNAAN FUNCTION
/*
1. MEMBUAT PERHITUNGAN MATEMATIKA :
    - Luas Lingkaran
    - Luas Segitiga
    - Luas Persegi Panjang
    - Luas Jajargenjang

2. MENGHITUNG TOTAL GAJI YANG DI DAPAT DALAM SATU BULAN DENGAN INPUT MINIMAL :
    - Nama Karyawan
    - Gaji Perhari
    - Jumlah Hari Masuk Kerja
**/

document.title = "Day-7 Practice JS";
const body = document.body;

// 1. UNTUK SOAL PERTAMA MATEMATIKA
//Luas Lingkaran = φ x r(2)
const luasLingkaran = (phi, r) => {
    return phi * Math.pow(r, 2); // untuk bilangan berpangkat bisa menggunakan '**' seperti 'r ** 2'
}
const phi = 3.1416;
let r = 7;
let hasilLuasLingkaran = luasLingkaran(phi, r);
const lingkaran = document.createElement('p');
lingkaran.textContent = `Ini adalah hasil dari luas lingkaran ${hasilLuasLingkaran}`;

body.appendChild(lingkaran);


// Luas Segitiga = 1/2 x a x t 
const luasSegitiga = (aS, tS) => {
    return 1/2 * aS * tS;
}
let aS = 10;
let tS = 6;
let hasilLuasSegitiga = luasSegitiga(aS, tS);
const segitiga = document.createElement('p');
segitiga.textContent = `Ini adalah hasil dari luas segitiga ${hasilLuasSegitiga}`;

body.appendChild(segitiga);

// body.append(`Jadi Luas Segitiga adalah ${hasilLuasSegitiga}`, document.createElement('p'), `Jadi Luas Lingkaran adalah ${hasilLuasLingkaran}`)


// Luas Persegi Panjang = p x l
const luasPersegiPanjang = (p, l) => {
    return p * l;
}

let p = 12;
let l = 8;
const hasilLuasPersegiPanjang = luasPersegiPanjang(p, l);
const persegiPanjang = document.createElement('p');
persegiPanjang.textContent = `Ini adalah hasil dari Luas Persegi Panjang adalah ${hasilLuasPersegiPanjang}`;
body.appendChild(persegiPanjang);


// Luas Jajargenjang = a x t
const luasJajargenjang = (aJ, tJ) => {
    return aJ * tJ;
}

let aJ = 14;
let tJ = 5;
const hasilLuasJajargenjang = luasJajargenjang(aJ, tJ);
const jajargenjang = document.createElement('p');
jajargenjang.textContent = `Ini adalah hasil dari luas Jajargenjang adalah ${hasilLuasJajargenjang}`;


// 2. MENGHITUNG TOTAL GAJI DENGAN INPUTAN NAMA KARYAWAN, GAJI PERHARI DAN JUMLAH MASUK KERJA
/*
const nameEmployee = prompt("Masukkan nama lengkap anda");
const inputPresent = Number(prompt("Masukkan total kehadiran anda"));

let countSalary = (salaryPerDay, present) => {
    return salaryPerDay * present;
}

let salaryPerDay = 200000;
let present = inputPresent;
// let notPresent = 0;
const totalSalary = countSalary(salaryPerDay, present);
let salaryEmployee = `Nama anda adalah ${nameEmployee} dan Jumlah total masuk kerja anda adalah ${present}. Jadi total Gaji anda adalah sebesar Rp.${totalSalary}`;

alert(salaryEmployee);
**/

// MARI KITA UJICOBA YANG SEDIKIT LEBIH KOMPLEKS UNTUK KEDUANYA MENGGUNAKAN PERKONDISIAN 😐

// MENGHITUNG TOTAL GAJI DENGAN INPUTAN NAMA KARYAWAN, GAJI PERHARI, JUMLAH HADIR 

const namaKaryawan = ["Ahmad Andri Rafiq", "AharaID", "Khairul Syawaludin", "Mama", "Bapak"];
const gajiHarian = 150000;
const jumlahHadir = [30, 28, 22, 18, 10];

let inputNama = prompt("Masukkan nama anda"); // Input dari pengguna

// Mencari indeks nama yang cocok
let indexKaryawan = namaKaryawan.indexOf(inputNama);

let gajiKaryawan = (jumlahHadir, gajiHarian, indexKaryawan) => {
    if (indexKaryawan !== -1) {
        return jumlahHadir[indexKaryawan] * gajiHarian;
    } else {
        return null; // Mengembalikan null jika nama tidak ditemukan
    }
};

if (indexKaryawan !== -1) {
    let totalGaji = gajiKaryawan(jumlahHadir, gajiHarian, indexKaryawan);
    console.log(`Nama anda adalah ${inputNama} dengan total hadir selama ${jumlahHadir[indexKaryawan]} hari. Jadi total gaji anda sebesar Rp.${totalGaji.toLocaleString()}`);
} else {
    console.log("Nama tidak ditemukan di daftar karyawan.");
}
