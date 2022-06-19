import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function Home() {
  return (
    <Container className='mt-5'>
        
    <Row>

        <Col lg ={4} md={6} sm ={12} className='text-center mt-5 p-3'>
   <span className="primary-text">
        <h5 className='title'>Welcome E-Shopping Cart </h5>
        </span>
        <Link to='/products'>  <Button variant="light">Login</Button>{' '}</Link>
       
    </Col>
    <Col lg ={8} md={6} sm ={12} >
              <div className='myStyle'> 
              
               </div> </Col>
    </Row>
    </Container>
  )
}
