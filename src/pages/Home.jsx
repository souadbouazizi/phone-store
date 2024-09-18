import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineTruck } from "react-icons/ai";
import { BsAwardFill } from "react-icons/bs";
import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import './Home.css'; // Assurez-vous que le fichier CSS est correct
import ProductDisplay from '../components/ProductDisplay'; // Correction du chemin
import ComponentSales from '../components/ComponentSales';
import LatestPosts from '../components/LatestPosts';
import Testimonial from '../components/Testimonial';
import NewsLetter from '../components/NewsLetter';
import GaleryPhoto from '../components/GaleryPhoto';


function Home() {
  return (
    <div>
      <Container>
        {/* Section des icônes */}
        <section className='my-5'>
          <Row>
            <Col md={3}>
              <div className='Item-card shadow text-center p-3'>
                <div className='icon mb-3'><AiOutlineTruck size={50}  /></div>
                <h3 className='fs-4'>Free delivery</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iusto culpa reiciendis.</p>
              </div>
            </Col>

            <Col md={3}>
              <div className='Item-card shadow text-center p-3'>
                <div className='icon mb-3'><BsAwardFill size={50} /></div>
                <h3 className='fs-4'>Quality guarantee</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iusto culpa reiciendis.</p>
              </div>
            </Col>

            <Col md={3}>
              <div className='Item-card shadow text-center p-3'>
                <div className='icon mb-3'><BsFillExclamationOctagonFill size={50}  /></div>
                <h3 className='fs-4'>Daily offers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iusto culpa reiciendis.</p>
              </div>
            </Col>

            <Col md={3}>
              <div className='Item-card shadow text-center p-3'>
                <div className='icon mb-3'><FaMoneyCheckAlt size={50} /></div>
                <h3 className='fs-4'>100% secure payment</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iusto culpa reiciendis.</p>
              </div>
            </Col>
          </Row>
        </section>

        {/* Section des produits */}
        <section>
          <h1 className='my-5 text-center'>Our Products</h1>
          <ProductDisplay /> {/* Assurez-vous que ce composant fonctionne correctement */}
        </section>
      </Container>
    <section>
       {/* Section sales*/}
       <ComponentSales />
    </section>
   <section>
       <LatestPosts />
   </section>
   <section>
    <Testimonial />
   </section>
   <section>
    <NewsLetter />
   </section>
  <section>
    <GaleryPhoto />
  </section>


    </div>
  );
}

export default Home;
