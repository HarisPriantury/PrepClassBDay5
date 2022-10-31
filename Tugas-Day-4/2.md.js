// # Grade

// Buatlah script untuk menentukan suatu nilai dengan ketentuan berikut:

// 1) Jika nilai yang dimasukkan lebih besar dan sama dengan 90 maka output yang keluar adalah __A__.
// 2) Jika nilai yang dimasukkan lebih besar dan sama dengan 80; dan lebih kecil dan sama dengan 89, maka output yang keluar adalah __B__.
// 3) Jika nilai yang dimasukkan lebih besar dan sama dengan 70; dan lebih kecil dan sama dengan 79, maka output yang keluar adalah __C__.
// 4) Jika nilai yang dimasukkan lebih besar dan sama dengan 60; dan lebih kecil dan sama dengan 69, maka output yang keluar adalah __D__.
// 5) Jika nilai yang dimasukkan lebih kecil dan sama dengan 59 maka output yang keluar adalah __E__.

// ## Contoh:

// ```
// Input: 30
// Output: E

// Input: 75
// Output: C

let nilai = 100;
if(nilai >= 0 && nilai <= 100){
    if(nilai >= 90){
        nilai = "A"
    }else if(nilai >= 80){
        nilai = "B"
    }else if(nilai >= 70){
        nilai = "C"
    }else if(nilai >= 60){
        nilai = "D"
    }else{
        nilai = "E"
    }
}
console.log(nilai)
