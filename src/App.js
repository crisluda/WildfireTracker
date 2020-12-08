// import logo from './logo.svg';
// import './App.css';
import Map from './componets/Map'
import { useState, useEffect } from 'react'
import Loader from './componets/Loader';


function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function fetchEvents() {
      setLoading(true)
      const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
      console.log(res)
      const { events } = await res.json()
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
    console.log(`location here ${eventData}`)
  }, [])
  return (
    <div className="App">
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
