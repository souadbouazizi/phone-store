// src/components/ProductDetail.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Col, Row, Form, Container } from 'react-bootstrap';
import allProducts from './productData'; // Assurez-vous d'importer les données correctement
import { useCart } from '../contexts/CartContext'; // Import du hook pour le contexte du panier
import './ProductDetail.css'; // Assurez-vous d'importer le fichier CSS

function ProductDetail() {
  const { id } = useParams(); // Obtenez l'ID du produit depuis l'URL
  const product = allProducts.find(p => p.id === parseInt(id)); // Trouvez le produit avec l'ID
  const navigate = useNavigate(); // Pour la navigation
  const { addToCart } = useCart(); // Utilisez le contexte du panier
  const [quantity, setQuantity] = useState(1); // État pour la sélection de quantité
  const [modalOpen, setModalOpen] = useState(false); // État pour gérer l'ouverture de la fenêtre modale

  const handleBack = () => {
    navigate('/'); // Naviguez vers la page d'accueil (ou liste des produits)
  };

  const handleQuantityIncrease = () => {
    if (quantity < product.quantity) {
      setQuantity(prevQuantity => prevQuantity + 1); // Augmentez la quantité de 1
    }
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1); // Diminuez la quantité de 1
    }
  };

  const handleAddToCart = () => {
    if (typeof addToCart === 'function') {
      addToCart({ ...product, quantity }); // Ajoutez le produit au panier avec la quantité sélectionnée
    } else {
      console.error('addToCart is not a function');
    }
  };

  const openModal = () => setModalOpen(true); // Ouvrir la fenêtre modale
  const closeModal = () => setModalOpen(false); // Fermer la fenêtre modale

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <Container className='my-5'>
        <Row>
          <Col md={6} className='overflow-hidden'>
            <img
              src={product.image}
              alt={product.name}
              className="zoom-image"
              onClick={openModal}
              style={{ cursor: 'pointer', width: '100%', objectFit: 'cover' }}
            />
            {modalOpen && (
              <div className="modal show" onClick={closeModal}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                  <span className="modal-close" onClick={closeModal}>&times;</span>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            )}
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className='fs-1 fw-bold text-uppercase text-primary my-4'>{product.name}</Card.Title>
              <Card.Text className='fs-4 fw-bold text-uppercase'><span>Category:</span> {product.category}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text className='fs-5 fw-bold'><span>Price:</span> <span className='fs-1 text-primary fw-bold'>{product.price}</span></Card.Text>
              <Card.Text><span>Available Quantity:</span> {product.quantity}</Card.Text>
              <div className="mb-3 d-flex align-items-center">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={handleQuantityDecrease}
                >
                  -
                </Button>
                <Form.Control
                  className="text-center mx-2"
                  style={{ maxWidth: '60px' }}
                  type="text"
                  value={quantity}
                  readOnly
                />
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={handleQuantityIncrease}
                >
                  +
                </Button>
              </div>
              <Button variant="primary" className='me-2' onClick={handleAddToCart}><span>Add to Cart</span></Button>
              <Button variant="danger" onClick={handleBack}><span>Back to Products</span></Button>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetail;
