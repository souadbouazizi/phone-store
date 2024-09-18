// SearchModal.js
import React, { useState } from 'react';
import { Modal, Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SearchModal({ show, handleClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = new URLSearchParams({
      search: searchTerm,
      category: searchCategory,
      price: searchPrice,
    }).toString();
    navigate(`/products?${query}`);
    handleClose(); // Close modal after search
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Search Products</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSearch}>
          <Form.Group controlId="searchTerm">
            <Form.Label>Product Name</Form.Label>
            <FormControl
              type="text"
              placeholder="Enter product name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="searchCategory">
            <Form.Label>Category</Form.Label>
            <FormControl
              type="text"
              placeholder="Enter category"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="searchPrice">
            <Form.Label>Price</Form.Label>
            <FormControl
              type="text"
              placeholder="Enter max price"
              value={searchPrice}
              onChange={(e) => setSearchPrice(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SearchModal;
