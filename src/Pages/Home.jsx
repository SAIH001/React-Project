import React from 'react'

import Slider from '../components/Slider';
import CardsSection from '../components/CardsSection';
import CalltoBook from '../components/CalltoBook';
import Aboutt from '../components/About';
import Testimonials from '../components/Testimonials';

import Services from '../components/Services';
import Gallery from '../Gallery';
import { PopularCourse } from '../components/PopularCourse';



const Home = () => {
  return (
    <>
    
    <Slider/>
    <CardsSection/>
    <Aboutt/>
    <CalltoBook/>
    <Services/>
    <Testimonials/>
    <Gallery/>
    <PopularCourse/>
    </>
  )
}

export default Home