import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
// import CategoryView from '../../components/CategoryView/CategoryView'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import mens_kurta from '../../../data/mens_kurta'
import HomeSectionCard from '../../components/HomeSectionCard/HomeSectionCard'

function HomePage() {
  return (
    <div className='mt-[-2.5rem]'>
        <MainCarousel/>
        {/* <CategoryView/> */}

        {/* <div className="flex flex-col items-center my-10">
          <h1 className='text-5xl font-roadRage mb-10'>Explore Our Latest Collections</h1>
          <div className="">
            <HomeSectionCard product={}/>
          </div>
        </div> */}

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 bg-[#FFE0BC]'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Kurti"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Suit"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Shoes"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
        </div>
    </div>
  )
}

export default HomePage