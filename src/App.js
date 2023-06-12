import logo from "./logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import weatherPNG from "./img/weather.png";
import { fetchWeatherAction } from "./redux/slices/weatherSlices";

//display icon https://openweathermap.org/img/wn/${icon}.png
function App() {

  const [city, setCity] = useState('São paulo')

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherAction("São paulo"));
  },[] );

//selecet state from store
  const state = useSelector(state => state);
  const { weather, loading, error } = state;
  console.log(state);

  return (
    <div>
      <section class="relative bg-cover bg-center bg-image-url min-h-screen"
       style={{
        backgroundImage: 'url("https://i.imgur.com/isHNQlY.jpg")',
       }}
      >
        <img
          class="w-100 lg:block lg:absolute top-0 left-0 pt-10"
          src={weatherPNG}
          alt="/"
        />

        <div class="relative container pt-12 px-4 mb-20 mx-auto text-center">
          <h2 class="mt-8 mb-8 lg:mb-12 text-white text-4xl lg:text-6xl font-semibold">
            Tempo agora
          </h2>
          <p class="max-w-3xl mx-auto mb-8 lg:mb-12 text-white text-xl opacity-80">
            Descubra a temperatura atual  em todo o mundo
          </p>
          <input value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="Search City"
            class="relative z-10 inline-block w-full md:w-auto mb-2  px-3 py-2 mr-4  font-medium leading-normal bg-transparent border-2 rounded-lg text-yellow-400 "
          ></input>
          <button
            onClick={() => dispatch(fetchWeatherAction(city))}
            type="button"
            className="inline-flex items-center px-3 pr-3 28 text-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Buscar
          </button>
        </div>
        {loading ? (
          <h1 class="text-gray-400 text-3xl text-center">
            Carregando, por favor espere ...
          </h1>
        ) : error ? (
          <h1 class="text-red-400 text-3xl text-center">{error?.message}</h1>
        ) : (
          <div class="max-w-6xl px-4 mx-auto ">
            <div class="flex flex-wrap -mx-4 justify-center">
              <div class="w-full md:w-1/3 px-4">
                <div class="bg-black bg-opacity-80 rounded-lg p-4">
                  <div class="flex justify-start  items-center">
                    <span class="flex items-center justify-center w-16 h-16 rounded-full border-2">
                      <img
                        class="w-56 "
                        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                        alt="/"
                      />
                    </span>
                    <h1 class="text-gray-300 pl-5">
                      {weather?.weather[0].description}
                    </h1>{" "}
                  </div>
                  <h1 class="text-gray-300 text-center text-4xl mb-10">
                    {Math.ceil(Number(weather?.main.temp))}{" "}
                    <span class="text-yellow-500 text-4xl">°C</span>
                  </h1>
                  <h3 class="mb-6 text-xl text-white font-semibold">
                    {weather?.name}, {weather?.sys?.country}
                  </h3>
                  <p class="mb-8 text-gray-300">
                    A condição do tempo em {weather?.name},{" "}
                    {weather?.sys?.country} é :{" "}
                    {weather?.weather[0].description} com temperatura de {" "}
                    {Math.ceil(Number(weather?.main.temp))} °C e uma umidade de {" "}
                    {weather?.main?.humidity} %
                  </p>
               <a 
               class="ml-auto flex items-center justify-center w-20 h-20 rounded-full  hover:bg-blue-700 text-white"
                    href="#"
                   >
                    <span class="flex items-center justify-center w-16 h-16 rounded-full border-2">
                      <img
                        class="w-56 "
                        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
                        alt="/"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <div class="bg-yellow-600 bg-opacity-90 py-4 text-center">
        <p class="mb-4  text-yellow-200">
          Desenvolvido por 
          <span class="p-2 text-yellow-200">
            <a href="https://www.linkedin.com/in/jezebel-guedes/">
              Jezebel Guedes
            </a>
          </span>
        </p>
            <path
              d="M18.7383 1.47342L18.7383 10.9304L17.5562 10.9304L17.5562 2.89788L0.834948 19.625L0.00154682 18.7916L16.7228 2.06448L9.28125 2.06448L9.28125 0.882355L18.1472 0.882355C18.4737 0.882355 18.7383 1.14697 18.7383 1.47342Z"
              fill="#1F40FF"
            ></path>
      </div>
    </div>
  );
};

export default App;