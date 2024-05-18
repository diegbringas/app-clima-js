let api_key = '605507acf87117e111e54a3ab5238541';

let diferenciaKelvin = 273.15 

let urlBase = 'https://api.openweathermap.org/data/2.5/weather'


document.getElementById('botonBusqueda').addEventListener('click', () =>{
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
    .catch(error => console.error('Error:', error));
    
}

function mostrarDatosClima(data){
    console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre =data.name
    const paisNombre = data.sys.country
    const temperatura =data.main.temp
    const humedad = data.main.humidity
    const descripcion =data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura -diferenciaKelvin)} C`

    const descripcionInfo =document.createElement('p')
    descripcionInfo.textContent = `la descripcion meteoroliga es: ${descripcion}`

    const iconoInfo = document.createElement('img')
    iconoInfo.src=`https://openweathermap.org/img/wn/${icono}@2x.png`
    
    const humedadInfo =document.createElement('p')
    humedadInfo.textContent = `la humedad es: ${humedad}%`


    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(humedadInfo)


}