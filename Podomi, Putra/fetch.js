// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => {
//         json.forEach((item) => console.log(item.name));;
//     });

const getDataUsers = async () => {
    const response  = await fetch ("https://jsonplaceholder.typicode.com/users")
    const json = await response.json();
    json.forEach(({name}) => console.log (name));
};

getDataUsers();