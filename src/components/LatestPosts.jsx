import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import gameImage from '../user/images/game.png'; // Image pour produit jeu
import cameraImage from '../user/images/camera.png'; // Image pour produit caméra
import diskImage from '../user/images/disk.png'; // Image pour produit disque
import './LatestPosts.css'; // Fichier CSS pour personnalisation

// Produits récents
const latestPosts = [
  { id: 1, name: 'Jeu Vidéo', description: 'Un jeu vidéo passionnant pour tous les âges.', image: gameImage, price: '$60' },
  { id: 2, name: 'Caméra HD', description: 'Une caméra haute définition pour capturer tous vos moments.', image: cameraImage, price: '$150' },
  { id: 3, name: 'Disque Dur', description: 'Un disque dur fiable pour stocker toutes vos données.', image: diskImage, price: '$80' },
];

function LatestPosts() {
  return (
    <section className="latest-posts-section">
      <Container>
        <h2 className="text-center text-primary my-5 fs-1 fw-bold text-uppercase zoom-effect">Derniers Produits</h2>
        <Row>
          {latestPosts.map(post => (
            <Col md={4} className="mb-4" key={post.id}>
              <Card className="text-center border-0 zoom-card overflow-hidden">
                <Card.Img variant="top" src={post.image} className="card-img-top zoom-img overflow-hidden" />
                <Card.Body>
                  <Card.Title className="fs-4 fw-bold zoom-effect">{post.name}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                  <Card.Text className="fs-5 fw-bold text-danger">{post.price}</Card.Text>
                  <Link to="/products">
            <Button variant="primary">See More</Button>
          </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default LatestPosts;
