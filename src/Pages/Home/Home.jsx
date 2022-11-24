import React, { useEffect } from 'react'
import Advertisement from '../../Components/Advertisement/Advertisement'
import Categories from '../../Components/Categories/Categories'
import Grid from '../../Components/Grid/Grid'
import Marqueee from '../../Components/Marquee/Marqueee'
import Spotlight from '../../Components/Spotlight/Spotlight'
import Subscribe from '../../Components/Subscribe/Subscribe'
import Trending from '../../Components/Trending/Trending'
import './Home.css'

const Home = () => {
  useEffect(() => {
    document.title = 'Design';
  })
  return (
    <div>
        <Trending/>
        <Subscribe/>
        <Grid/>
        <Spotlight/>
        <Advertisement/>
        <Categories/>
        <Marqueee/>
    </div>
  )
}

export default Home