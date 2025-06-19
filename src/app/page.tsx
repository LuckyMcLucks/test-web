'use client'

import React from 'react'
import HeaderOne from '@/components/Header/HeaderOne'
import SliderOne from '@/components/Slider/SliderOne'
import CategoryOne from '@/components/Category/CategoryOne'
import RecommendOne from '@/components/Recommend/RecommendOne'
import tentData from '@/data/Tent.json' 
import Amenities from '@/components/Amenities/Amenities'
import Footer from '@/components/Footer/Footer'

const Home = () => {
  return (
    <>
      <div className="page-one overflow-x-hidden">
        <HeaderOne />
        <SliderOne />
        <CategoryOne />
        <RecommendOne data={tentData} start={10} end={18} />
        <Amenities /> 
        <Footer />
      </div>
    </>
  )
}

export default Home
