// getData();
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => {
//     json.forEach((item) => console.log(item.name));
//   });

const axios = require("axios");

const getDataUsers = async () => {
  try {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const json = await response.json();
    // json.forEach(({ name }) => console.log(name));

    //Axios
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    response.data.forEach(({ name }) => console.log(name));
  } catch (error) {
    console.log(`Error to get data ${error}`);
  }
};

getDataUsers();