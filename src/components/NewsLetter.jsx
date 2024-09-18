

import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './NewsLetter.css'; // Fichier CSS pour la personnalisation

function NewsLetter() {
  return (
    <section className="newsletter-section py-5">
      <Container>
        <h2 className="text-center text-white mb-4">Subscribe to our Newsletter</h2>
        <p className="text-center text-white mb-4">          
                Receive the latest news and offers straight to your inbox!
        </p>
        <Form>
          <Row className="justify-content-center">
            <Col md={8}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Entrez votre adresse email"
                  className="p-3"
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Button variant="primary" type="submit" className="p-3 w-100">
              Subscribe
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
}

export default NewsLetter;
