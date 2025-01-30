"use strict";
/*
1. Tugas buat 10 lampu dengan 4 kategori sebagai berikut:
    - Ruang keluarga (3 lampu)
    - Ruang Makan (1 lampu)
    - Ruang Tidur (2 lampu)
    - Ruang Tamu (4 lampu)

2. Buat lampunya itu nyala satu per satu dan lampu dengan sekaligus berdasarkan kategori
**/
document.title = "Practice JS - Lamp House";

let toggle1 = document.getElementById("flexSwitchCheckDefault1");
let toggle2 = document.getElementById("flexSwitchCheckDefault2");
let toggle3 = document.getElementById("flexSwitchCheckDefault3");
let toggle4 = document.getElementById("flexSwitchCheckDefault4");
let toggle5 = document.getElementById("flexSwitchCheckDefault5");

let lampfamily1 = document.getElementById("lampfamily1");
let lampfamily2 = document.getElementById("lampfamily2");
let lampfamily3 = document.getElementById("lampfamily3");
let lampfamily4 = document.getElementById("lampfamily4");
let mainlampfamily4 = document.getElementById("mainlampfamily4");

// Saklar Ruang Keluarga
function saklarFamily1() {
  if (toggle1.checked) {
    lampfamily1.src = "/assets/lamponnobg.png";
  } else {
    lampfamily1.src = "/assets/lampoffnobg.png";
  }

  if (toggle2.checked) {
    lampfamily2.src = "/assets/lamponnobg.png";
  } else {
    lampfamily2.src = "/assets/lampoffnobg.png";
  }

  if (toggle3.checked) {
    lampfamily3.src = "/assets/lamponnobg.png";
  } else {
    lampfamily3.src = "/assets/lampoffnobg.png";
  }
}

function mainSaklarFamily() {
  if (toggle4.checked) {
    lampfamily1.src = "/assets/lamponnobg.png";
    lampfamily2.src = "/assets/lamponnobg.png";
    lampfamily3.src = "/assets/lamponnobg.png";
    mainlampfamily4.src = "/assets/lamponnobg.png";
  } else {
    lampfamily1.src = "/assets/lampoffnobg.png";
    lampfamily2.src = "/assets/lampoffnobg.png";
    lampfamily3.src = "/assets/lampoffnobg.png";
    mainlampfamily4.src = "/assets/lampoffnobg.png";
  }
}

// Saklar Ruang Tamu
function saklarSitting() {
  if (toggle1.checked) {
    lampfamily1.src = "/assets/lamponnobg.png";
  } else {
    lampfamily1.src = "/assets/lampoffnobg.png";
  }

  if (toggle2.checked) {
    lampfamily2.src = "/assets/lamponnobg.png";
  } else {
    lampfamily2.src = "/assets/lampoffnobg.png";
  }

  if (toggle3.checked) {
    lampfamily3.src = "/assets/lamponnobg.png";
  } else {
    lampfamily3.src = "/assets/lampoffnobg.png";
  }

  if (toggle4.checked) {
    lampfamily4.src = "/assets/lamponnobg.png";
  } else {
    lampfamily4.src = "/assets/lampoffnobg.png";
  }
}

function mainSaklarSitting() {
  if (toggle5.checked) {
    lampfamily1.src = "/assets/lamponnobg.png";
    lampfamily2.src = "/assets/lamponnobg.png";
    lampfamily3.src = "/assets/lamponnobg.png";
    lampfamily4.src = "/assets/lamponnobg.png";
    mainlampfamily4.src = "/assets/lamponnobg.png";
  } else {
    lampfamily1.src = "/assets/lampoffnobg.png";
    lampfamily2.src = "/assets/lampoffnobg.png";
    lampfamily3.src = "/assets/lampoffnobg.png";
    lampfamily4.src = "/assets/lampoffnobg.png";
    mainlampfamily4.src = "/assets/lampoffnobg.png";
  }
}

// Saklar Ruang Kamar Tidur
function saklarBedroom() {
  if (toggle1.checked) {
    lampfamily1.src = "/assets/lamponnobg.png";
  } else {
    lampfamily1.src = "/assets/lampoffnobg.png";
  }

  if (toggle2.checked) {
    lampfamily2.src = "/assets/lamponnobg.png";
  } else {
    lampfamily2.src = "/assets/lampoffnobg.png";
  }
}

function mainSaklarBedroom() {
  if (toggle5.checked) {
    lampfamily1.src = "/assets/lamponnobg.png";
    lampfamily2.src = "/assets/lamponnobg.png";
    mainlampfamily4.src = "/assets/lamponnobg.png";
  } else {
    lampfamily1.src = "/assets/lampoffnobg.png";
    lampfamily2.src = "/assets/lampoffnobg.png";
    mainlampfamily4.src = "/assets/lampoffnobg.png";
  }
}

function saklarDining() {
  if (toggle1.checked) {
    lampfamily1.src = "/assets/lamponnobg.png";
  } else {
    lampfamily1.src = "/assets/lampoffnobg.png";
  }
}
