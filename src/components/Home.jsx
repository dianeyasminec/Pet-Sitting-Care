import React from 'react'
import Reviews from './Reviews'

export default function Home() {
  return (
    <div>
        <p class='lead'>
        Are you looking for a reliable pet sitter to care for your pet, while you are away from home?
        At Urban Pet Sitting, we help pet owners travel without having to worry about their pets at 
        home! We promise to care for your pets as if they were our own. We offer in-home pet care for
         overnight stays, mid-day visit care, daily care and multiple night services. Our pet sitters 
         love animals of all kinds - dogs, cats, reptiles, birds, guinea pigs and more.
        </p>
        <div class='lead'>
            <h2>Why Choose Us?</h2>
            <p>
            Our concierge services include all of your pet needs. Our pet sitters stay at your home
             and give your precious pets the utmost care while considering any medical issues.
             <img/>
            </p>
        </div>
        <div class='lead'>
            <h3>Reviews</h3>
            {/* Interactive reviews selection */}
        </div>
        <Reviews/>
    </div>
  )
}
