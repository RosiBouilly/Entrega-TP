const key = 'wnOJAb0bbQ8GUGOKDIMOtxV8LtJoHLvi';

const encontrarClima = async(id) => {
const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
const query = `${id}?apikey=${key}`;
const response = await fetch(base + query);
const data = await response.json();
return data[0];
};

const encontrarCiudad = async(ciudad) => {

const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
const query = `?apikey=${key}&q=${ciudad}`;
const response = await fetch(base + query);
const data = await response.json();
return data[0];
};

let nombreCiudad;
let temperaturaActual;

encontrarCiudad('Buenos Aires').then(data => {
    nombreCiudad = data.LocalizedName;
    return encontrarClima(data.Key);
}).then(data => {
    console.log(data);
    temperaturaActual = data.Temperature.Metric.Value + '°' + data.Temperature.Metric.Unit;

    const informacionClima = document.getElementById('informacion-clima');
    informacionClima.innerHTML = `${nombreCiudad} ~ ${temperaturaActual}`;
})
.catch(erro => console.log(err));

