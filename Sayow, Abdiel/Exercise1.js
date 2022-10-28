//concat()
const test1 = ['aku','bisa'];
const test2 = ['buat','koding','ea'];
const test3 = test1.concat(test2);
console.log(test3);
//includes()
const test4 = [1,2,3];
console.log(test4.includes(2));
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));
//length
const test5 ="Hello Men";
console.log(test5.length);
//split()
const test6 = 'aku bisa buat koding';
const words = test6.split(' ');
console.log(words[0]);
const words1 = test6.split(' ');
console.log(words1[2]);
const testcopy = test6.split();
console.log(testcopy);
//slice()
const makanan = ['pisang', 'tahu', 'ubi','tempe','milu'];
console.log(makanan.slice(2));
console.log(makanan.slice(1,5));
console.log(makanan.slice(1,-2));
console.log(makanan.slice());
//substring()
const test7 = 'ABDIEL';
console.log(test7.substring(1,4));
console.log(test7.substring(2));
//toLowerCase()
const test8 = 'Abdiel Piero Rahul SAYOW';
console.log(test8.toLowerCase());
//toUpperCase()
const test9 = 'abdiel piero rahul sayow';
console.log(test9.toUpperCase());
//trim()
const test10 = '   HAI INI AKU   ';
console.log(test10);
console.log(test10.trim());
//valueOf()
function MyNumberType(n) {
    this.number = n;
  }
  MyNumberType.prototype.valueOf = function() {
    return this.number;
  };
  const object1 = new MyNumberType(5);
  console.log(object1 + 1);