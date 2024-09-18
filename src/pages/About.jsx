import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineTruck } from 'react-icons/ai'; // Assurez-vous que ces icônes sont importées correctement
import { BsAwardFill, BsFillExclamationOctagonFill } from 'react-icons/bs'; // Assurez-vous que ces icônes sont importées correctement
import { FaMoneyCheckAlt } from 'react-icons/fa'; // Assurez-vous que ces icônes sont importées correctement
import about from '../user/images/about.jpg';

function About() {
  return (
    <div>
      <Container className='my-5'>
        <Row className='justify-content-center align-items-center'>
          <Col md={6}>
            <img src={about} alt="phone store" className="img-fluid shadow rounded" />
          </Col>
          <Col md={6}>
		  <h1>About us</h1>
		  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem quidem hic quas reiciendis corrupti veritatis. Mollitia eveniet nihil laboriosam dolores.</p>
            <Row>
              <Col md={6}>
                <div className='Item-card text-center p-3'>
                  <div className='icon mb-3'><AiOutlineTruck size={50} /></div>
                  <h3 className='fs-4'>Free delivery</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iusto culpa reiciendis.</p>
                </div>
              </Col>

              <Col md={6}>
                <div className='Item-card text-center p-3'>
                  <div className='icon mb-3'><BsAwardFill size={50} /></div>
                  <h3 className='fs-4'>Quality guarantee</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iusto culpa reiciendis.</p>
                </div>
              </Col>

              <Col md={6}>
                <div className='Item-card text-center p-3'>
                  <div className='icon mb-3'><BsFillExclamationOctagonFill size={50} /></div>
                  <h3 className='fs-4'>Daily offers</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iusto culpa reiciendis.</p>
                </div>
              </Col>

              <Col md={6}>
                <div className='Item-card text-center p-3'>
                  <div className='icon mb-3'><FaMoneyCheckAlt size={50} /></div>
                  <h3 className='fs-4'>100% secure payment</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iusto culpa reiciendis.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
