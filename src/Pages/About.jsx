import React from 'react'
import PageHeader from '../Components/PageHeader '
import WelcomeSection from '../Components/WelcomSection'
import ServicesSection from '../Components/ServicesSection'
import TeamSection from '../Components/TeamSection'
import PetCareStats from '../PetCareStats'
import Testimonial from '../Components/Testimonial'
import NewsletterSubscription from '../Components/NewsletterSubscription '
import Footer from '../Components/Footer'

function About() {
  return (
    <div className="pt-26">

      <PageHeader  pageTitle="About me" pageRoute="/about" />
      <WelcomeSection/>
      <ServicesSection/>
      <TeamSection/>
      <PetCareStats/>
     <Testimonial/>
     <NewsletterSubscription />
     <Footer/>
     
    </div>
  )
}

export default About
