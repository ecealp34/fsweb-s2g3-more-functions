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

// 2.yol
/*function dosyaAdiniBul(path) {
  const path1 = path.substring(path.lastIndexOf("/") + 1);
  return path1;
}
 // 3.yol
/*Furkan
function dosyaAdiniBul(path) {
  return path.includes("/") ? path.split("/").pop() : path;
}

console.log(
  "GÖREV 1 1",
  dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3")
);
console.log("GÖREV 1 2", dosyaAdiniBul("")); 
/*
//4.yol
/* function dosyaAdiniBul(path) {
  // kodlar buraya
  const pathParts = path.split("/");
  return pathParts[pathParts.length - 1];
}
 */

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
  
//2.yol

// function ortalamaBul(sayiArray) {
//   if (sayiArray.length === 0) {
//     return null;
//   }

//   /*
//   // let toplam = 0;
//   for (let i = 0; i < sayiArray.length; i++) {
//     toplam += sayiArray[i];
//   }
//   */
//   const reducerOrtalama = sayiArray.reduce((toplam, item) => {
//     return toplam + item;
//   }, 0);
//   return Math.round(reducerOrtalama / sayiArray.length);
// }

/*function ortalamaBul(data) {
  let ort = data.reduce((a, b) => a + b, 0) / data.length || null;
  return ort;
  
/*
/* function ortalamaBul(data) {
  let ortalama = data.reduce((sum, item) => {
    return sum + item;

  }, null;
  return ortalama ? sum/data.length : ortalama
  a + b, 0) / data.length || null;
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

function ortalamadanBuyukleriBul(sayiArr, ortHesaplayanFnc) {
  
  if(sayiArr.length === 0) {

    return null
    
  } 

  let numbers = [];
  let ortalama = ortHesaplayanFnc(sayiArr);

    for (let i = 0; i < sayiArr.length; i++) {

    if(sayiArr[i] >= ortalama) {
      
      numbers.push(sayiArr[i])
    }

  }
  
  return numbers;

}


console.log("3.", ortalamadanBuyukleriBul([], ortalamaBul));

console.log("3.", ortalamadanBuyukleriBul([4], ortalamaBul));

console.log("3.", ortalamadanBuyukleriBul([50, -26, 153, 7], ortalamaBul));

console.log("3.", ortalamadanBuyukleriBul([109, 216, 288, 143, 71, 185, -278, 194, 5], ortalamaBul));


/*2.yol doğru yolu

function ortalamadanBuyukleriBul(newArr, ortHesaplayanFnc) {
  if (newArr.length === 0) {
    return null;
  }

  let numbers = [];
  let ortalama = ortHesaplayanFnc(newArr);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] >= ortalama) {
      numbers.push(newArr[i]);
    }
  }

  return numbers;
}
console.log("3.", ortalamadanBuyukleriBul([],ortalamaBul));

console.log("3.", ortalamadanBuyukleriBul([4], ortalamaBul));

console.log("3.", ortalamadanBuyukleriBul([50, -26, 153, 7], ortalamaBul));

console.log("3.", ortalamadanBuyukleriBul([109, 216, 288, 143, 71, 185, -278, 194, 5], ortalamaBul));
  

/*3.yol
function ortalamadanBuyukleriBul(sayiArrayi, ortFunction) {
  let ortalama = ortFunction(sayiArrayi);
  let array = sayiArrayi.filter((value) => value >= ortalama);
  return ortalama ? array : ortalama;
}
console.log("3.", ortalamadanBuyukleriBul([],ortalamaBul));

console.log("3.", ortalamadanBuyukleriBul([4], ortalamaBul));

console.log("3.", ortalamadanBuyukleriBul([50, -26, 153, 7], ortalamaBul));

console.log("3.", ortalamadanBuyukleriBul([109, 216, 288, 143, 71, 185, -278, 194, 5], ortalamaBul));

/* 4.yol
/*function ortalamadanBuyukleriBul(numArray, ortalamaFonksiyonu) {
  if (numArray.length === 0) {
    return null;
  }
  const ortalama = ortalamaFonksiyonu(numArray);
  console.log(ortalama);
  return numArray.filter((sayi) => sayi >= ortalama);
}
/*
/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
