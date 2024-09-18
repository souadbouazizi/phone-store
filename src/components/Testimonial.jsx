import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa'; // Icônes étoiles
import './Testimonial.css'; // Fichier CSS pour la personnalisation
import { BiSolidQuoteAltRight } from "react-icons/bi";

// Témoignages
const testimonials = [
  {
    id: 1,
    quote:  <BiSolidQuoteAltRight />,
    text: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    stars: 5,
    clientName: "Jean Dupont",
  },
  {
    id: 2,
    quote:  <BiSolidQuoteAltRight /> ,
    text: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    stars: 5,
    clientName: "Marie Lemoine",
  },
  {
    id: 3,
    quote: <BiSolidQuoteAltRight /> ,
    text: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    stars: 5,
    clientName: "Pierre Martin",
  },
];

function Testimonial() {
  return (
    <section className="testimonial-section py-5">
      <Container>
        <h2 className="text-center text-primary my-5 fs-1 fw-bold text-uppercase zoom-effect">Témoignages</h2>
        <Carousel className="testimonial-carousel shadow px-3 pb-5 pt-2">
          {testimonials.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <div className="d-flex justify-content-center">
                <blockquote className="testimonial-quote fw-bold text-primary text-center opacity-50" style={{fontSize:'180px',}}>
                  {testimonial.quote}
                </blockquote>
              </div>
              <p className="text-center mt-3 testimonial-text fs-4">
                {testimonial.text}
              </p>
              <div className="text-center mt-2">
                {/* Affichage des étoiles */}
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} color="#ffc107" size="1.5em" />
                ))}
              </div>
              <p className="text-center mt-3 fw-bold fs-5">
                — {testimonial.clientName}
              </p>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default Testimonial;
