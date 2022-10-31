// # Kabisat

// Buatlah script untuk menentukan suatu tahun merupakan tahun kabisat atau bukan.

// ### Contoh:

// ```
// Input: 1900
// Output: Bukan kabisat

// Input: 2000
// Output: Kabisat

// Input: 2001
// Output: Bukan kabisat

// Input: 2016
// Output: Kabisat
// ```

//tahun kabisat adalah tahun yang muncul 4 tahun sekali atau bisa dikatakan kelipatan 4 / habis jika dibagi 4

let tahun = 2016;
if (tahun % 4 == 0){
    tahun = "Kabisat"
}else{
    tahun = "Bukan Kabisat"
}
console.log(tahun);