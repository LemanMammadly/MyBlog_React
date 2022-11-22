import React from 'react'
import Subscribe from '../../Components/Subscribe/Subscribe'
import Trending from '../../Components/Trending/Trending'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Trending/>
        <Subscribe/>
    </div>
  )
}

export default Home