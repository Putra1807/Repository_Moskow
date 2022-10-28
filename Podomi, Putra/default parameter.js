//default parameter
const greetings = (nama = "Unnamed", age) => 
`Hello ${nama}. Umur Saya ${age} tahun`;
console.log(greetings("John", 15))