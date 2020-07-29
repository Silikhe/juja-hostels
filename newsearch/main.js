const fetchData = () => {
    const url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
    fetch(url)
    .then(response => Response.json())
    .then(data => displayCities(data))
    .catch(error => console.log(error));
};
// alert("connected")
// const fetchBill = () => {
//     const apiHost = 'https://randomapi.com/api';
//     const apiKey = '006b08a801d82d0c9824dcfdfdfa3b3c';
//     const apiEndpoint = `${apiHost}/${apiKey}`;
//     fetch(apiEndpoint)
//     .then(response => response.json())
//     .then(data => displayCartTotal(data))
//     .catch(error => console.log(error))
//   };

const displayCities = (data) => {
    data.forEach((city) => {
        console.log(city);
    })
};
