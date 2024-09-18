


// src/components/ProductDisplay.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom'; 
import './ProductDisplay.css';
import p1 from '../user/images/p1.png';
import p2 from '../user/images/p2.png';
import p3 from '../user/images/p3.png';
import p4 from '../user/images/p4.png';
import p5 from '../user/images/p5.png';
import p6 from '../user/images/p6.png';
import p7 from '../user/images/p7.png';
import p8 from '../user/images/p8.png';
import p9 from '../user/images/p9.png';
import p10 from '../user/images/p10.png';
import p11 from '../user/images/p11.png';
import p12 from '../user/images/p12.png';
import p13 from '../user/images/p13.png';
import p14 from '../user/images/p14.png';
import p15 from '../user/images/p15.png';
import p16 from '../user/images/p16.png';
import p17 from '../user/images/p17.png';
import p18 from '../user/images/p18.png';

// Dummy products data
const allProducts = [
  { id: 1, name: 'Iphone mobile', category: 'Mobile', price: '$800', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p1 },
  { id: 2, name: 'Headphones', category: 'Accessory', price: '$150', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p2 },
  { id: 3, name: 'Nikon Camera', category: 'Camera', price: '$650', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p3 },
  { id: 4, name: 'smart wotch', category: 'Watch', price: '$150', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p4 },
  { id: 5, name: 'Game Controller', category: 'Gamme', price: '$80', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p5 },
  { id: 6, name: 'Flash Disque', category: 'Accessory', price: '$30', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p6 },
  { id: 7, name: 'Cable', category: 'Accessory', price: '$20', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p7 },
  { id: 8, name: 'Sammsung Smart phone', category: 'Mobile', price: '$650', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p8 },
  { id: 9, name: 'Sammsung Smart phone', category: 'Mobile', price: '$1200', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p9 },
  { id: 10, name: 'Smart Watch', category: 'Watch', price: '$200', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p10 },
  { id: 11, name: 'Wireless Bluetooth Headphones', category: 'Accessory', price: '$150', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p11 },
  { id: 12, name: 'Smart Watch', category: 'Watch', price: '$300', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p12 },
  { id: 13, name: 'smart phone', category: 'Mobile', price: '$2000', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p13 },
  { id: 14, name: 'Smart Watch', category: 'Watch', price: '$150', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p14 },
  { id: 15, name: 'Iphone smart phone', category: 'Mobile', price: '$699', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p15 },
  { id: 16, name: 'Headphones', category: 'Accessory', price: '$49', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p16 },
  { id: 17, name: 'Camera kanon', category: 'Camera', price: '$799', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p17 },
  { id: 18, name: 'Headphones', category: 'Accessory', price: '$150', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: p18 }
];


function ProductDisplay() {
  const { category } = useParams(); // Utilisation de useParams pour obtenir la catégorie depuis l'URL
  const navigate = useNavigate(); // Utilisation de useNavigate pour la navigation
  const [currentPage, setCurrentPage] = React.useState(1);

  const filterProducts = (category) => {
    if (category === 'All' || !category) return allProducts;
    return allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
  };

  const productsPerPage = 8;
  const products = filterProducts(category);
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to ProductDetail with the product ID
  };

  return (
    <Container className='my-5'>
      <section className='my-5'>
        <Row className='d-flex justify-content-center align-items-center'>
          {currentProducts.map(product => (
            <Col md={3} key={product.id} className="mb-4">
              <Card className='text-center border-0 shadow px-3 py-4'>
                <Card.Img variant="top" src={product.image} alt={product.name} style={{height: '150px'}} />
                <Card.Body>
                  <Card.Title className='text-uppercase text-info'>{product.name}</Card.Title>
                  <Card.Text className='fw-bold'>Price: <span className='text-primary fw-bold fs-2'> {product.price}</span></Card.Text>
                  <Card.Text className='small'>{product.Description}</Card.Text>
                  <Button className="button-animated" onClick={() => handleProductClick(product.id)}>View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <Pagination>
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
            disabled={currentPage === 1}
          />
          <div className='rounded-circle d-flex g-3'>{paginationItems}</div>
          <Pagination.Next
            onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </Container>
  );
}

export default ProductDisplay;