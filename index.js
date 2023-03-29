// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(fullPath) {

  return fullPath.replace(/^.*[\\\/]/, '');

 }
 
console.log("1", dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3"));

/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul(sayiarr) {

  let toplam = 0

  if(sayiarr.length === 0) {
    return null
  } else {

  for (let i = 0; i < sayiarr.length; i++) {
  
    toplam  += sayiarr[i]

  }
}
  let ort = (sayiarr.length) ? toplam / sayiarr.length : 0 

   return ort;
  
  }

console.log("2", ortalamaBul([]));

console.log("2", ortalamaBul([4]));

console.log("2", ortalamaBul([50, -26, 153, 7]));

console.log("2", ortalamaBul([109, 216, 288, 143, 71, 185, -278, 194, 5])); 
  

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(newArr) {
 
  let sum = 0;
    
  if(newArr.length === 0) {

    return null
    
  } else {

    for (let i = 0; i < newArr.length; i++) {

    sum += newArr[i];

  }
  
  return sum / newArr.length;

}}

function yenidiziolustur(newArr) {

  let ortalama = ortalamadanBuyukleriBul(newArr);

  let numbers = [];

  if(newArr.length === 0) {

    return null
    
  } else {

  for (let i = 0; i < newArr.length; i++) {

    if (newArr[i] >= ortalama) {

      numbers.push(newArr[i]);

    }
  }}

  return numbers;

 
}

console.log("3.", yenidiziolustur([]));

console.log("3.", yenidiziolustur([4]));

console.log("3.", yenidiziolustur([50, -26, 153, 7]));

console.log("3.", yenidiziolustur([109, 216, 288, 143, 71, 185, -278, 194, 5]));



  

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
