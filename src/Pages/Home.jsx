import React from 'react'
import PetCareSlider from '../Components/PetCareSlider'
import WelcomeSection from '../Components/WelcomSection'
import ServicesSection from '../Components/ServicesSection'
import AppointmentForm from '../Components/AppointmentForm'
import Services from '../Components/Services'
import TeamSection from '../Components/TeamSection'
import PetCareStats from '../PetCareStats'
import DonationSection from '../Components/DonationSection'
import FeaturedVideo from '../Components/FeaturedVideo'
import Testimonial from '../Components/Testimonial'
import EventsSection from '../Components/EventsSection'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
  
    <PetCareSlider />
    <WelcomeSection />
    <ServicesSection />
    <Services />
    <AppointmentForm />
    <TeamSection />
    <PetCareStats />
    <DonationSection />
    <FeaturedVideo />
    <Testimonial />
    <EventsSection />
    <Footer /> 
    </>
  )
}

export default Home
