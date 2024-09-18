import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation
import sale1 from '../user/images/phone-sale.png'; // Image pour produit -25%
import sale2 from '../user/images/watch-Sale.png'; // Image pour produit -40%
import './ComponentSales.css'; // Fichier CSS pour personnalisation

// Produits soldés
const salesProducts = [
  { id: 1, name: 'Smart Phone G5', originalPrice: '$530', discount: '-25%', finalPrice: '$397.50', image: sale1 },
  { id: 2, name: 'Smart Watch', originalPrice: '$320', discount: '-40%', finalPrice: '$192', image: sale2 },
];

function ComponentSales() {
  const navigate = useNavigate(); // Hook pour la navigation

  const handleSeeMore = () => {
    navigate('/sales'); // Rediriger vers la page des soldes
  };

  return (
    <section className='overflow-hidden' style={{ width: '100%', padding: '50px 0', backgroundColor: '#f5f5f5' }}>
      <Container className='overflow-hidden'>
        <h2 className="text-center text-primary my-5 fs-1 fw-bold text-uppercase zoom-in-out-title">Promotions</h2>
        <Row className="d-flex justify-content-center align-items-center">
          {salesProducts.map((product, index) => (
            <Col key={product.id} md={6} className={`d-flex justify-content-${index % 2 === 0 ? 'center' : 'start'} align-items-center product-col text-center`} style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
            }}>
              <Card className="border-0 bg-transparent text-white" style={{ width: '80%' }}>
                <Card.Body>
                  <Card.Title className="text-uppercase fs-1 fw-bold">{product.name}</Card.Title>
                  <Card.Text className="fw-bold text-decoration-line-through">Original price: {product.originalPrice}</Card.Text>
                  <Card.Text className="fw-bold">Reduction: <span className="text-success">{product.discount}</span></Card.Text>
                  <Card.Text className="fw-bold">Final price: <span className='fs-1 fw-bold text-danger'>{product.finalPrice}</span></Card.Text>

                  {/* Bouton pour chaque produit */}
                  <div className='mt-3 text-center'>
                    <Button onClick={handleSeeMore} className='' variant="primary">See More Sales</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ComponentSales;
