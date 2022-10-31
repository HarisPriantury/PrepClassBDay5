// # Film Rating

// Buatlah script untuk menentukan rating suatu film, dengan ketentuan sebagai berikut:

// 1) Jika usia yang dimasukkan lebih atau sama dengan 21, maka rating film adalah __DEWASA__.
// 2) Jika usia yang dimasukkan lebih atau sama dengan 13, maka rating film adalah __REMAJA__.
// 3) Jika usia yang dimasukkan lebih atau sama dengan 9, maka rating film adalah __BIMBINGAN ORANG TUA__.
// 4) Jika usia yang dimasukkan kurang dari 9, maka rating film adalah __SEMUA USIA__.

// ### Contoh:

// ```
// Input: 15
// Output: Remaja

// Input: 32
// Output: Dewasa
// ```

let usia = 2;
let rating;
if (usia >= 21){
    rating = "DEWASA";
}else if(usia >= 13){
    rating = "REMAJA";
}else if(usia >= 9){
    rating = "BIMBINGAN ORANG TUA"
}else{
    rating = "SEMUA USIA"
}
console.log(rating);
