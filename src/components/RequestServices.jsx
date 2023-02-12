import React from 'react'
import { Container, Button, Form , Table} from 'react-bootstrap'
import dogs from '../images/dogs.jpg'
import services from '../data/services'



export default function RequestServices() {
   
    const options = ['I will give a copy of my key.', 
  'I will give permission to get a key from the leasing office.',
'I have keyless entry.',
'I will set up a lockbox with a key']

function handleSubmit (e){
e.preventDefault();
}

function handleClick(e){
    
}

function handleChange(e){
const name = e.target.value.trim()
console.log(name)

}

  return (
    <div className='requestBody'>
         <img 
    className="rounded dogs"
    src={dogs} alt='cute dogs wallpaper'/>
    <h1>Ask Us, We'll Help You</h1>
    <Container>
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Name</Form.Label>
            
            <Form.Control onChange={handleChange} type="name"  placeholder="Enter First" />
            <Form.Control type="name" placeholder="Enter Last" className='mb-2'/>
        </Form.Group>

        <Form.Group>
            <Form.Label>How did you hear about us?</Form.Label>
            <Form.Control type="name" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Phone</Form.Label>
        <Form.Control type="email" placeholder="Enter Phone number" />  

        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="name" />
            <Form.Label>Area of Town</Form.Label>
            <Form.Control type="name" />
            <Form.Label>Apartment Building or Streets</Form.Label>
            <Form.Control type="name" />
        </Form.Group>

        <Form.Group>
            <h4>Type of Booking</h4>
           <h6>Reason of the visit(s): </h6>
            <Form.Label>Apartment Building or Streets</Form.Label>
            <Form.Check type="checkbox" label="I will be gone during the day" />
            <Form.Check type="checkbox" label="I will be out of town" />
        </Form.Group>


        <Form.Group>
            <h4>Booking Details</h4>
           
            <span>Dogs</span>
            <p>
            If you are out of town, our minimum number of visits for dogs is three visits 
            (am, mid-day, and pm). If you do an overnight, it includes the evening and morning 
            visit. You'll also need to book a mid-day visit. We can guarantee a window of three 
            hours for our dog visits.
            </p>

            <span>Cats</span>
            <p>
            We must see cats at least every other day. We do not want to go more than 48 hours 
            without seeing a cat. We are happy to see them daily as well. For cats, we usually 
            do our visits between 9:00 a.m. and 5:00 p.m. or within the leasing hours..
            </p>
           </Form.Group>


           <Form.Group>
            <h4>What kinds of services are you interest in </h4>
    {services.map((s, key) =>{
        return (
            <Form.Check key={s.id}type="checkbox" label={s.service} />
        )
    })}   
        </Form.Group>

        <Form.Group>
            <h4>Access to your home</h4>
           <h6>How will the pet sitter enter to your home? </h6>
            
            {options.map((option, key) =>{
                return (
                        <Form.Check key={option} type="checkbox" label={option} />
                )
            })}
           <Form.Check  type="checkbox" label='Other'>
           <Form.Control type="text" placeholder="Other" />  
            </Form.Check>
            
        </Form.Group>

        
      <Form.Group>
        <h3>Pet Information</h3>
        <Table>
            <thead>
                <tr>
                    <th> </th>
                    <th> Type of Pet</th>
                    <th> Pet's name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Button>Remove</Button></td>
                    <td><Form.Control type="name" placeholder="Enter " /></td>
                    <td><Form.Control type="name" placeholder="Enter " /></td>
                </tr>
            </tbody>
        </Table>
            {/* <Form.Label>Type of pet</Form.Label>
            <Form.Control type="text" />
            <Form.Label>Pet's name</Form.Label> */}
           
            <Button>Add Item</Button>
            <p>
                Thank you for submitting a service request.  We look forward to working with 
                you and your pets.  A member of our team will be with you shortly.  Our booking 
                program is called Pet Pocketbook.  Stay tuned for a welcome email from 
                Pet Pocketbook which will prompt you to set up your account and complete
                 your bookings. 
            </p>
            
        </Form.Group>

        
      
      <Button onClick={handleClick} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>

    </div>
  )
}
