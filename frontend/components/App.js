import React, { useState, useEffect }from 'react'
import axios from 'axios'
import Card from './Card'
const apiKey = "DEMO_KEY"
const URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
function fetchPhoto() {
  axios.get(URL)
    .then(res => {
      console.log(res.data)
      setApod(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
}
// fetchPhoto()
setApod({
      "date": "2023-12-14",
      "explanation": "Massive stars in our Milky Way Galaxy live spectacular lives.  Collapsing from vast cosmic clouds, their nuclear furnaces ignite and create heavy elements in their cores. After only a few million years for the most massive stars, the enriched material is blasted back into interstellar space where star formation can begin anew. The expanding debris cloud known as Cassiopeia A is an example of this final phase of the stellar life cycle. Light from the supernova explosion that created this remnant ...",
      "hdurl": "https://apod.nasa.gov/apod/image/2312/CasA_nircam_4096.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Supernova Remnant Cassiopeia A",
      "url": "https://apod.nasa.gov/apod/image/2312/CasA_nircam_1024.jpg"
    
    })
  }, [])
  if (!apod) return 'Fetching Photo of the Day'
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
        />
    </section>
  )
}

export default App
