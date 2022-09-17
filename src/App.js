import React, { useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=pt_br&appid=755ebb64a575624ffcde758a87660305`
  
  const handleChange = (e) => {
    setData(e.target.value);
   };

  const searchLocation = (event) => {
   
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    
  }

  return (
    <div className="app">
      <h2>PREVISÃO DO TEMPO</h2>
      <div className="search">
        <input className='input'
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={handleChange}
          placeholder='Digite sua cidade'
          type="text" />

          <button 
            onClick={searchLocation}
            className="btn">
            Pesquisar
          </button>
         


      </div>
      <div className='container_info_fora'>
          <div className="container">
              <div className="titulo">
                <div className="local">
                  {data.main ? <p className='bold'>{data.name}</p> : null}
                </div>
              
                <div className="temp">
                  {data.main ? <h1>{data.main.temp.toFixed()}°</h1> : null}
                </div>      

                <div className="description">
                  {data.weather ? <p>{data.weather[0].description}</p> : null}
                </div>
              </div>
            
              <div className="rodape">
                <div className="temp_maximo">
                  {data.main ? <p className='bold'>{data.main.temp_min.toFixed()}° mínima</p> : null}
                </div>

                <div className="temp_maximo">
                  {data.main ? <p className='bold'>{data.main.temp_max.toFixed()}° máxima</p> : null}
                </div>
                
              </div>  
          </div>
        </div>
    </div>
  );
}

export default App;