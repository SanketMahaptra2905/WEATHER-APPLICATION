const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const notFound = document.querySelector('.not-found');
const cityHide=Document.querySelector('.not-found');

            search.addEventListener('click', () => {
                const APIKey = '98740f4ebc0d63bc0f8ba70090e5a091';
                const city = document.querySelector('.search-box input').value;

                if (city == '') return;

                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

                fetch(url)
                    .then(response => response.json())
                    .then(json => {

                        if(json.cod=='404'){
                            cityHide.textContent=city;
                            container.style.height='400px';
                            weatherBox.classList.remove('active');
                            weatherDetails.classList.add('active');
                            error404.classList.add('active');
                            return;
                        }

                        

                        const image = document.querySelector('.weather-box img');
                        const temperature = document.querySelector('.weather-box .temperature');
                        const description = document.querySelector('.weather-box .description');
                        const humidity = document.querySelector('.weather-details .humidity span');
                        const wind = document.querySelector('.weather-details .wind span');

                        if(cityHide.textContent==city){
                            return;
                        }
                        else{
                        cityHide.textContent=city;

                        container.style.height='555px';
                        container.classList.add('active');
                        weatherBox.classList.add('active');
                        weatherDetails.classList.add('active');
                        error404.classList.remove('active');

                        setTimeout(()=>
                            {container.classList.remove('active');
                                },2500);
                        switch (json.weather[0].main) {
                            case 'clear':
                                image.src = 'clear.png';
                                break;
                            case 'rain':
                                image.src = 'rain.png';
                                break;
                            case 'snow':
                                image.src = 'snow.png';
                                break;
                            case 'clouds':
                                image.src = 'cloud.png';
                                break;
                            case 'mist':
                                image.src = 'mist.png';
                                break;
                            default:
                                image.src = 'cloud.png';
                        }

                        temperature.innerHTML = `${Math.round(data.main.temp)}<span>°C</span>`;
                        description.innerHTML = data.weather[0].description;
                        humidity.innerHTML = `${data.main.humidity}%`;
                        wind.innerHTML = `${Math.round(data.wind.speed)} km/hr`;

                        const infoWeather=document.querySelector('.infoWeather');
                        const infoHumidity=document.querySelector('.info-humidity');
                        const infoWind=document.querySelector('.info-wind');

                        const elCloneInfoWeather=infoWeather.closeNode(true);
                        const elCloneInfoHumidity=infoHumidity.closeNode(true);
                        const elCloneInfoWind=infoWind.closeNode(true);

                        elCloneInfoWeather.id='clone-info-weather';
                        elCloneInfoWeather.classList.add('active-clone');

                        elCloneInfoHumidity.id='clone-info-humidity';
                        elCloneInfoHumidity.classList.add('active-clone');

                        elCloneInfoRain.id='clone-info-rain';
                        elCloneInfoRain.classList.add('active-clone');

                        setTimeout(()=>{
                            infoWeather.insertAdjacentElement("afterend",elCloneInfoWeather);
                            infoHumidity.insertAdjacentElement("afterend",elCloneInfoHumidity);
                            infoWeather.insertAdjacentElement("afterend",elCloneInfoWind);
                        },2000);

                        const cloneInfoWeather=document.querySelectorAll('.info-weather.active-clone');

                        const totalCloneInfoWeather = cloneInfoWeather.length;
                        const cloneInfoWeatherFirst = cloneInfoWeather[0];

                        const cloneInfoHumidity = document.querySelector('.info-humidity.active-clone');
                        const cloneInfoHumidityFirst=cloneInfoHumidity[0];

                        const cloneInfoWind=document.querySelectorAll('.info-wind.active-clone');
                        const cloneInfoWindFirst=cloneInfoWind[0];

                        if(totalCloneInfoWeather>0){
                            cloneInfoWeatherFirst.classList.remove('active-clone');
                            cloneInfoHumidityFirst.classList.remove('active-clone');
                            elCloneInfoWindFirst.classList.remove('active-clone');

                            setTimeout(()=>{
                                cloneInfoWeatherFirst.remove();
                                cloneInfoHumidityFirst.remove();
                                cloneInfoWindFirst.remove();
                            },2200);
                        }
                        }
                    })
                });
