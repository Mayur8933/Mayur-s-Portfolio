import React from 'react'
import '../css/projects.css'
import Header from './header'
import { Row, Col } from 'react-bootstrap'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Project = () => {
    return (
        <div className='container'>
            <Header />

            <AwesomeSlider className='height-con'>
                <div style={{ background: '#99FFCC' }}>
                    <Row className='text-center'>
                        <Col>
                            <h1 className='img-c pad'>Y-TUBERS</h1>
                            <p>Y-TUBERS is a Online site for hiring youtubers for various Events and collaboration.</p>
                            <p>I Used Django Framework and PostgreSQL as a Database in this project.</p>
                            <button className='btn btn-outline-info space'><a className='decoration' href='https://github.com/Mayur8933/Ytubers-Full-Stack-django-course-/tree/master/tubers'>Open Project in github</a></button>
                        </Col>
                    </Row>
                </div>


                <div style={{ background: '#99FFCC' }}>
                    <Row className='text-center'>
                        <Col>
                            <h1 className='img-c pad'>Github Repository Search App</h1>
                            <p>Developed a Github repository search app with firebase in ReactJs. </p>
                            <p>Implemented Github API for fetching details of repositories.</p>
                            <p>Used firebase authentication for Signup/Login Purpose.</p>
                            <button className='btn btn-outline-info space'><a className='decoration' href='https://github.com/Mayur8933/GitHub-App-ReactJs-'>Open Project in github</a></button>
                        </Col>
                    </Row>
                </div>

                <div style={{ background: '#99FFCC' }}>
                    <Row className='text-center'>
                        <Col>
                            <h1 className='img-c pad'>E-shop</h1>
                            <p>E-shop is a E-Commerce shopping Website.</p>
                            <p>I Used Django Framework and SQLite default Database in this project.</p>
                            <button className='btn btn-outline-info space'><a className='decoration' href='https://github.com/Mayur8933/E-shop-Django-Project'>Open Project in github</a></button>
                        </Col>
                    </Row>
                </div>
            </AwesomeSlider>
        </div>
    )
}

export default Project;




// <Row className='text-center'>
// <Col>
// <h1 className='img-c pad'>Y-TUBERS</h1>
// <p>Y-TUBERS is a Online site for hiring youtubers for various Events and collaborations </p>
// <p>I Used Django Framework and PostgreSQL as a Database in this project.</p>
// <button className='btn btn-outline-info space wt wt3'><a className='decoration' href=''>Open Project in github</a></button>
// </Col>
// </Row>



// <Carousel>
// <Carousel.Item>
//        <h1 className='img-c pad text-center'>Y-TUBERS</h1>
//        <p className='text-center'>Y-TUBERS is a Online site for hiring youtubers for various Events and collaborations </p>
//        <p className='text-center'>I Used Django Framework and PostgreSQL as a Database in this project.</p>
//        <button className='text-center btn btn-outline-info space wt wt3'><a className='decoration' href=''>Open Project in github</a></button>
// <img className='img-fluid img-sm' src={img} height='100px'/>
//     <Carousel.Caption className='img-c'>Project 1</Carousel.Caption>
// </Carousel.Item>

// <Carousel.Item>
// <img className='img-fluid img-sm' src={img}/>
//     <Carousel.Caption className='img-c'>Project 2</Carousel.Caption>
// </Carousel.Item>

// <Carousel.Item>
// <img className='img-fluid img-sm' src={img}/>
//     <Carousel.Caption className='img-c'>Project 3</Carousel.Caption>
// </Carousel.Item>
// </Carousel>