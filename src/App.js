import React, {Fragment, useState} from 'react';
import './App.css';


function App() {
    const [city, setCity] = useState("")
    const [weatherForecast, setWeatherForecast] = useState(null)
  
    const handleChange = (e) => {
     setCity(e.target.value);
    };
  
    const handleSearch = () => {
        fetch (`http://api.weatherapi.com/v1/current.json?Key=21ecf729ce734d57bd1233741221309&q=${city}&lang=pt`)
         .then((response) => {
          if (response.status == 200){
            return response.json()
          }
        })
        .then((data) => {
          setWeatherForecast(data)
          console.log(data)
        });
  
    };
  
    return (
      <Fragment>
        <main className="container">
            <div>
                <h2>PREVISÃO DO TEMPO</h2>
              <div>
                  <div className="container_espaço">
                    <input 
                      placeholder='Digite sua cidade'
                      onChange={handleChange} 
                      value={city}/>
                  </div>
              </div>
              <div className="container_espaço">
                  <button 
                    onClick={handleSearch}
                    className="btn">
                    Pesquisar
                  </button>
              </div>
                {weatherForecast ? (
                  <div className='container_info_fora'> 
                    <div className='container_info'>  
                          <div>
                            <img src = {weatherForecast.current.condition.icon}/>
                          </div>
                          
                          <div>
                            <p>Hoje</p>
                            <p>{weatherForecast.current.condition.text}</p>
                            <p>Temperatura: {weatherForecast.current.temp_c}°</p>                          
                          </div>
                    </div>
                  </div>
                ) : null}
            </div>
        </main>
      </Fragment>   
    );
  }
  export default App;