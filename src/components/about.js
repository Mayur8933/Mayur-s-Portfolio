import React from 'react'
import '../css/about.css'
import Header from './header'
import { Row,Col} from 'react-bootstrap'
import photo from '../images/portfolio_logo_tp.png'


const About = () =>{
    return(
        <div className='container'>
        <Header/>
        <Row className='d-flex height justify-content-center'>
                <Col className='align-self-center col-lg-12 spacing'>
                    <p className='line line2'> I am a pre-final year computer engineering student.I'm interested in full stack development.I have a good knowledge about <span className='style orange'>PYT</span><span className='style blue'>HON </span>
                    and <span className='style'>C</span> programming language, <span className='style blue'>SQL,</span><span className='style red'>HTML/CSS</span>.Also know about basics of <span className='style yellow'>JAVASCRIPT</span>.Has experience in <span className='style green'>DJANGO</span> framework and <span className='style skyblue'>REACTJS</span>.
                    I'm looking for exciting opportunity to learn more.</p>
                    <Row className='d-flex justify-content-center text-center'>
                    <span className='gradient res'>MY RESUME</span><br></br>
                    <button className='btn btn-outline-info space wt wt2'><a className='decoration' href='https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:8b6ae4da-7f04-4b2e-9aca-992e23a8d4e3'>VIEW RESUME</a></button>
                    </Row>
                </Col>
                <Col className='text-center align-self-start'>
                <img className='img-fluid img' alt='' src={photo} width='350px'/>
            </Col>
        </Row>
    </div>
    )
}

export default About;


// <Row className='back'>
//             <Col className='text-center align-self-start'>
//                 <img className='img-fluid img' src={photo} width='350px'/>
//             </Col>
//         </Row>