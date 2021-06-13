import React from 'react'
import '../css/home.css'
import Header from './header';
import {Row,Col} from 'react-bootstrap' 
import logo from '../images/working_logo.jpg'
const Home = () =>{
    return(
        <div className='container'>
            <Header/>
            <Row className='d-flex justify-content-center row-width back'>
                <Col className='align-self-sm-center text-center'>
                    <h3>HeLLO</h3>
                    <h1>I AM MAYUR PATIL</h1>
                    <h4>Full-stack Developer </h4>
                   <button className='btn btn-outline-info space'><a className='decoration' href='/contact'>HIRE ME</a></button>
                   <button className='btn btn-outline-info space'><a className='decoration' href='/about'>VIEW RESUME</a></button>
                </Col>
                    
                <Col className='text-center align-self-start'>
                    <img  className='margin-logo img' alt='' src={logo} width='340px' height='330px'/>
                </Col>
            </Row>
        </div>
    )
}

export default Home;