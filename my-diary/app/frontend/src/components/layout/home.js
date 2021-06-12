import React, { useEffect } from 'react'
import axios from 'axios'

const Home = () => {

  useEffect(() => {
    axios.get('http://localhost:8090/')
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }, [])

  return(
    <div></div>
  )
}

export default Home