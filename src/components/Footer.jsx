import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Fichier CSS pour personnalisation
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <footer className="footer text-white py-4" style={{background:'#001f3f',}}>
      <Container>
        <Row>
          {/* Section à propos */}
          <Col md={4}>
            <h3 className='mb-3'>About us</h3>
            <p>
            We are a company dedicated to providing the best products and services to our customers. Follow us on our social networks to stay informed.
            </p>
          </Col>

          {/* Section Liens utiles */}
          <Col md={4}>
            <h3 className='mb-3'>Useful links</h3>
            <ul className="list-unstyled">
              <li><a href="/Products" className="text-white">Products</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/privacy-policy" className="text-white">Politique de confidentialité</a></li>
            </ul>
          </Col>

          {/* Section Réseaux sociaux */}
          <Col md={4} className='text-center'>
            <h3 className='mb-3'>Follow us</h3>
            <SocialLinks />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Your business. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
