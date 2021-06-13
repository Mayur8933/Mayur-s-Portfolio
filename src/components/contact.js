import React ,{useState} from 'react'
import '../css/contact.css'
import Header from './header'
import {Row,Col} from 'react-bootstrap'
import mail from '../images/email.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import phone from '../images/phone.png'


const Contact = () =>{

    const [email,setEmail] = useState('Get email')
    const [mob,setMob] = useState('Get Phone')

    const showEmail = ()=> {
        setEmail('mayurpatil1902@gmail.com')
    }

    const showPhone = ()=> {
        setMob('7767969076')
    }

    return(
        <div className='container'>
            <Header/>
            <Row className='d-flex height margin-top text-center back' >
                <Col className='align-self-center'>
                <img className='height-width' alt='' src={mail}/><br></br>         
                <button className='btn btn-outline-info space' onClick={showEmail}>{email}</button>
                </Col>

                <Col className='align-self-center'> 
                    <img className='height-width' alt='' src={github}/><br></br>         
                    <button className='btn btn-outline-info space text'><a className='text' href='https://github.com/Mayur8933'>Open Github</a></button>
                </Col>


                <Col className='align-self-center'> 
                    <img className='height-width'  alt='' src={linkedin}/><br></br>         
                    <button className='btn btn-outline-info space'><a className='text' href='https://www.linkedin.com/in/mayur-patil-a93a62189/'>Open LinkedIn</a></button>
                </Col>

       
                <Col className='align-self-center'>
                    <img className='height-width'  alt='' src={phone}/><br></br>
                    <button className='btn btn-outline-info space ' onClick={showPhone}>{mob}</button>
                </Col>
            </Row>

        </div>
    )
}

export default Contact;