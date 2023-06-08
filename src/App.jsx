import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './Utils/getRandomNumber'
import useFetch from './hooks/useFetch'
import LocationInfo from './components/LocationInfo'
import ResidentInfo from './components/ResidentInfo'
import FormSearch from './components/FormSearch'

function App() {

  const randomId = getRandomNumber(126)

  const [idLocation, setIdLocation] = useState(randomId)

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`

  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [idLocation])

  return (
    <>
      <div className='header'>
        <img className='img__header' src="./public/img/5.jpg" alt="img" />
      </div>

      <div className='app'>      
        <FormSearch 
          setIdLocation={setIdLocation}
      />

      {
        hasError
          ? <h2>❌Hey! you must provide an id from 1to 126☹️</h2>
          : (
            <>
              <LocationInfo 
                location={location}
              />
              <div className='resident__container'>
                {
                  location?.residents.map(url => (
                    <ResidentInfo 
                      url={url}
                      key={url}
                    />
                  ))
                }
              </div>
            </>
          ) 
      }
    </div>
    </>

  )
}

export default App
