function ByAge(person){
    person.sort((a,b) => a.age - b.age);
  }
  let John = { name: " John", age: 35};
  let Bill = { name: " Bill", age: 23};
  let Jack = { name: " jack", age: 20};
  let Bob = { name: " Bob", age: 17};
  let Abu = { name: "Abuuu", age: 22};

let person = [Abu,John,Jack,Bob,Bill];

  ByAge(person);
  alert(person[0].name);
  alert(person[1].name);
  alert(person[2].name);
  alert(person[3].name);
  alert(person[4].name);
  console.log(person);