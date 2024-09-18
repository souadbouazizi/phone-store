// src/pages/Sales.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext'; // Importez depuis le dossier contexts
import Sales1 from '../user/images/Sales1.jpg';
import Sales2 from '../user/images/Sales2.jpg';

const salesProducts = [
  { id: 1, name: 'Smart Phone 4G', originalPrice: '$1000', discount: '-20%', finalPrice: '$800', image: Sales1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam explicabo sequi, maxime quis nesciunt?' },
  { id: 2, name: 'Smart Watch', originalPrice: '$200', discount: '-30%', finalPrice: '$140', image: Sales2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam explicabo sequi, maxime quis nesciunt?' },
];

function Sales() {
  const { addToCart } = useCart(); // Utilisation du contexte du panier

  return (
    <Container className='my-5'>
      <h1>What are the current sales?</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime doloribus numquam dicta laudantium ex dolor commodi tenetur veritatis reiciendis ut.</p>

      {salesProducts.map((product, index) => (
        <Row key={product.id} className={`mt-4 text-dark ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <Col md={6}>
            <img src={product.image} alt={product.name} className="img-fluid shadow rounded" />
          </Col>
          <Col md={6}>
            <Card className="border-0 bg-transparent text-dark">
              <Card.Body>
                <Card.Title className="text-uppercase fs-1 fw-bold">{product.name}</Card.Title>
                <Card.Text className="fw-bold text-decoration-line-through">Original price: {product.originalPrice}</Card.Text>
                <Card.Text className="fw-bold">Reduction: <span className="text-danger">{product.discount}</span></Card.Text>
                <Card.Text className="fw-bold">Final price: <span className='fs-1 fw-bold text-danger'>{product.finalPrice}</span></Card.Text>
                <Card.Text>{product.description}</Card.Text>

                <div className='mt-3 d-flex justify-content-between'>
                  <Button onClick={() => addToCart(product)} variant="primary">Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Sales;
