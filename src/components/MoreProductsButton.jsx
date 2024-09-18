import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const MoreProductsButton = () => {
  return (
    <Link to="/products">  {/* Correct the link path and quotes */}
      <Button variant="primary">More Products</Button>
    </Link>
  );
};

export default MoreProductsButton;
