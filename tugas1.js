// Pembuatan untuk penginputan user tentang mengetahui saldo akhir si user menggunakan prompt
let myMoney = Number(prompt("Masukkan uang anda saat ini"));
let mySalary = Number(prompt("Masukkan uang yang bertambah saat ini"));
let myDebt = Number(prompt("Masukkan total hutang anda saat ini"));
let getMoney = myMoney + mySalary;
let decreaseMoney = getMoney - myDebt;
let finalMoney = decreaseMoney;

alert(`TOTAL UANG ANDA SAAT INI ADALAH ${finalMoney}`);

// Untuk mengambil hari saat ini yang mengikuti waktu sekarang 
let dateTime = new Date().getDay();

switch(dateTime) {
    case 0:
        dateTime = "Minggu"
    break
    case 1:
        dateTime = "Senin"
    break
    case 2:
        dateTime = "Selasa"
    break
    case 3:
        dateTime = "Rabu"
    break
    case 4:
        dateTime = "Kamis"
    break
    case 5:
        dateTime = "Jumat"
    break
    case 6:
        dateTime = "Sabtu"
    break
    default:
        dateTime = "No Day"
    break
}

console.log(`Hari ini adalah hari ${dateTime}`);