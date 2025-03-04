import React, { useEffect }  from 'react'
import PageHeader from '../Components/PageHeader '
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'

function Contact() {
  useEffect(() => {
      document.title = "Contact";
    }, []);
  return (
    <div className='pt-26'>
      <PageHeader pageTitle="Contact Us" pageRoute="/contact" />
      <ContactForm />
      <Footer/>
      
    </div>
  )
}

export default Contact
