// SearchResultsPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function SearchResultsPage() {
  const location = useLocation();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const term = queryParams.get('search') || '';
    const category = queryParams.get('category') || '';
    const price = queryParams.get('price') || '';

    const fetchResults = async () => {
      try {
        // Change '/api/products' to your actual API endpoint
        const response = await fetch('/api/products');
        const data = await response.json();

        console.log('Fetched data:', data); // Log fetched data for debugging

        // Ensure that the data structure matches your filtering logic
        const filteredResults = data.filter(product => {
          // Convert price to number for comparison
          const productPrice = parseFloat(product.price) || 0;
          const maxPrice = parseFloat(price) || Infinity;

          const matchesTerm = term === '' || product.name.toLowerCase().includes(term.toLowerCase());
          const matchesCategory = category === '' || product.category.toLowerCase() === category.toLowerCase();
          const matchesPrice = price === '' || productPrice <= maxPrice;

          console.log('Filtering:', {
            name: product.name,
            matchesTerm,
            matchesCategory,
            matchesPrice
          }); // Log filtering details for debugging

          return matchesTerm && matchesCategory && matchesPrice;
        });

        console.log('Filtered results:', filteredResults); // Log filtered results for debugging

        setResults(filteredResults);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchResults();
  }, [location.search]);

  return (
    <Container>
      <h1>Search Results</h1>
      <Row>
        {results.length > 0 ? (
          results.map(result => (
            <Col md={4} key={result.id}>
              <Card>
                <Card.Img variant="top" src={result.image} />
                <Card.Body>
                  <Card.Title>{result.name}</Card.Title>
                  <Card.Text>
                    Category: {result.category} <br />
                    Price: ${result.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No results found</p>
        )}
      </Row>
    </Container>
  );
}

export default SearchResultsPage;
