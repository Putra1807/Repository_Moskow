//class in JS

// const mobil = { //Property atau object litteral
//     warna: 'merah',
//     merek: 'Honda',
//     transmisi: 'manual',
//     nyalakanMobil: function(){
//         console.log(mobil)
//         console.log(`Mobil merek ${this.merek} dinyalakan`)
//     }
    
// };

class Mobil{
    constructor(warna, merek, transimisi){
        this.warna = warna;
        this.merek = merek;
        this.transmisi = transimisi;
    }

    nyalakanMobil(){
        console.log(`Mobil merek ${this.merek} dinyalakan`)
    }
}
// const honda = new Mobil("merah", "honda", "manual")
// const toyota = new Mobil("hitam", "toyota", "matic")
// console.log(honda)
// honda.nyalakanMobil();
// console.log(toyota)
// toyota.nyalakanMobil();

//inheritance / pewarisan (is a relationship)
class Toyota extends Mobil{
    
    constructo(warna, merek, transmisi, ){
        supe(warna, merek, transmisi, mesin, bahanBakar)
        this.mesin = mesin
        this.bahanBakar = bahanBakar
    }
    //overriding
    nyalakanMobil(){
        console.log(`Mobil merek ${this.merek} dinyalakan!!!`)
    }
    matikanMobil(){
        console.log(`Mobil merek ${this.merek} dimatikan!!!`)
    }
}
const agya = new Toyota("putih", "agya", "manual", "1200cc", "bahanBakar")
console.log(agya)
agya.nyalakanMobil();
agya.matikanMobil()