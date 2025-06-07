import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
// import CategoryView from '../../components/CategoryView/CategoryView'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import mens_kurta from '../../../data/mens_kurta'

function HomePage() {
  return (
    <div className=''>
        <MainCarousel/>
        {/* <CategoryView/> */}

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