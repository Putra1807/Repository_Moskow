//synchronus

// console.log ("baris 1")
// console.log ("baris 2")
// console.log ("baris 3")
// console.log ("Proses 4")
// console.log ("Proses 5")
//asynchronus

//1.Multithread
// console.log("Proses 1")
// setTimeout(()=> {
//     console.log("Proses 2")
// }, 5000);
// setTimeout(()=> {
//     console.log("Proses 3")
// }, 2000);
// setTimeout(()=> {
//     console.log("Proses 4")
// }, 3000);
// console.log("Proses 5 (menggunakan data dari API)");

//2. Concurent
console.log("Proses 1");
setTimeout(() =>{
    console.log("Proses 2 (Mengambil data API)");
    setTimeout(() =>{
        console.log("Proses 3");
        setTimeout(() =>{
            console.log("Proses 4");
            setTimeout(() =>{
                console.log("Proses 5 (Menggunakan data dari API)");
            }, 2000);
        }, 3000);
    }, 2000);
}, 5000);

// console.log("Baris 1");
// setTimeout(() =>{
//     console.log ("Baris 2");
// }, 5000); // 5 detik lagi baru muncul
// console.log("Baris 3");