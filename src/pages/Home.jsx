import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import CategoryItem from '../Components/CategoryItem'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <CategoryItem />
    </div>
  )
}

export default Home