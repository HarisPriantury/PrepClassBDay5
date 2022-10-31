// # Ganjil atau Genap?

// Buatlah script untuk menentukan suatu angka merupakan bilangan ganjil atau genap.

// ## Contoh:

// ```
// Input: 43
// Output: Ganjil

// Input: 1032
// Output: Genap
// ```

let angka = 4.2;
if (angka % 2 == 0){
    angka = "Genap";
}else if (angka % 2 == 1){
    angka = "Ganjil";
}else{
    angka = "bukan Genap dan bukan Ganjil"
}
console.log(angka)
