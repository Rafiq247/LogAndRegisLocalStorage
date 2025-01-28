// Mempelajari DOM (Document Object Model)
/* Tugasnya adalah munculkan sebuah element html baru dengan isi berupa isi text dengan nama kalian :
    - ketika kursor digeser ke dalam button munculkan sebuah text bertuliskan nama kita sendiri(didalam buttonnya dan diluar button / di halaman body)
    - ketika kursor keluar dari tombol button ubah warna text yang baru(didalam buttonnya dan diluar button / di halaman body)
**/

document.title = 'Day-6 Practice JS';

const body = document.body;
const btn = document.querySelector(".btn"); // querySelector dapat diisi dengan nama class ataupun id tetapi harus memakai identitas nya masing-masing seperti jika memakai id harus memakai hastag seperti '#btn'. getElementById itu untuk pemanggilan id tanpa harus memakai identitas nya seperti 'btn' 
let textOriButton = 'Hello Button';
const myName = document.createElement("p");

myName.textContent = 'Ahmad Andri Rafiq';
btn.textContent = textOriButton;
btn.style.fontSize = "28px";
btn.style.backgroundColor = "red";
btn.style.padding = "16px 12px 16px 12px";
btn.style.borderRadius = "8px";

function kursorIn(){
    btn.style.backgroundColor = "aqua";
    btn.style.color = "white";
    btn.textContent = 'AharaID';
    myName.style.color = "#212121";
    body.append(myName);
}

function kursorOut() {
    btn.style.backgroundColor = "tomato";
    btn.style.color = "red";
    myName.style.color = "red";
}

/* Kesimpulan dari yang telah dipelajari :
    - untuk memanipulasi element2 yg ada di html dan kita perlu menggunakan objek 'document' apa yang ingin kita manipulasi pada element tersebut tetapi tergantung dari element2 tersebut karena cara setiap element yang ada di html untuk dimanipulasi itu berbeda beda.
    - kita bisa menginisialisasikan pada element yang ingin kita manipulasikan dengan variable yang telah kita deklarasikan seperti (let myElement = document.createElement('b');) jadi tanpa harus memanggil lagi elementnya (jika studi kasus nya kompleks seperti menggunakan function).
    - banyak-banyakin baca dokumentasi entah itu bahasa pemograman, framework, library, dll 🙃

**/