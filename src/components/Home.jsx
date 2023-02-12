import React from 'react'
import Reviews from './Reviews'
import dogImg from '../images/dog.jpg'
// import { IconName } from "react-icons/bs";
import services from '../data/services'



export default function Home() {
 
 console.log(services)
  return (
    <div>
        <p className='lead'>
        Are you looking for a reliable pet sitter to care for your pet, while you are away from home?
        At Urban Pet Sitting, we help pet owners travel without having to worry about their pets at 
        home! We promise to care for your pets as if they were our own. We offer in-home pet care for
         overnight stays, mid-day visit care, daily care and multiple night services. Our pet sitters 
         love animals of all kinds - dogs, cats, reptiles, birds, guinea pigs and more.
        </p>
        <div className='lead'>
            <h2>Why Choose Us?</h2>
            <p>
            Our concierge services include all of your pet needs. Our pet sitters stay at your home
             and give your precious pets the utmost care while considering any medical issues.
             <img src= {dogImg} alt='dog_retriever' className='dog'/>
            </p>
        </div>
        
        <div className='lead'>
            <h3>Reviews</h3>
            {/* Interactive reviews selection */}
        </div>
        <Reviews/>

        <div>
          <h3>Our services: </h3>
          <div className="container py-4">
  <div className="row">
          {services.map((s, key) =>{
            return <div key={s.id} className='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-4 col-xxl-6 mb-4 cards'>
            <div className='card h-100 shadow rounded'>
            <div className='card-body'>
  <div className='d-flex justify-content-between '>
                      <h1>{s.service}</h1>
                      </div>
                      <div className=''>
<p className='card-text lead'>{s.description}</p>
</div>
                   </div>
                   </div>
                   </div>
          })}
           </div>
          </div>
        </div>
    </div>
  )
}

