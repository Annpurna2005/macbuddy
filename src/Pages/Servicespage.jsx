import React from 'react'
import PageHeader from '../Components/PageHeader '
import Services from '../Components/Services'
import AppointmentForm from '../Components/AppointmentForm'
import Footer from '../Components/Footer'
import ServiceOffers from '../Components/ServiceOffers'

function Servicespage() {
  return (
    <div className='pt-26'>
       <PageHeader  pageTitle="Our Services" pageRoute="/services" />
       <Services />
       <ServiceOffers/>
       <AppointmentForm/>
       <Footer/>
   
    </div>
  )
}

export default Servicespage
