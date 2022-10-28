//Promise
let condition = true;
let newPromise = new Promise((resolve, reject) => {
  if (condition) {
    // apa yang dilakukan jika promise 'fulfilled'
    resolve("Berhasil");
  } else {
    // apa yang dilakukan jika promise 'rejected'
    reject("Gagal");
  }
});
  // Ada 2 cara menggunakan promise
  // 1. Then - Catch
//   newPromise
//     .then((result) => result)
//     .then((result2) => {
//       console.log(result2);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
  // Async - Await
  // const getData = async () => {
  //   const result = await newPromise;
  //   console.log(result);
  // };
  