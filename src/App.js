
import { useEffect, useState, useRef } from 'react'
import * as tt from '@tomtom-international/web-sdk-maps'
import './App.css'

const App = () => {
  const mapElement = useRef()
  const [map, setMap] = useState({})

  useEffect(() => {
    let map = tt.map({
      key: 'RvG9hLOemIXcWtR5XKp9qvPMmFhtAdVX',
      container: mapElement.current,
      center: [longitude, latitude],
      zoom: 14
    })

    setMap(map)
  },[])

  return (
    <div className="app">
      <div ref={mapElement} className="map"></div>
    </div>
  )
}

export default App;
