// src/components/NavbarComponent.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import Cart from './Cart'; // Assurez-vous que le chemin est correct
import SearchModal from './SearchModal'; // Assurez-vous que le chemin est correct
import UserModal from './UserModal'; // Assurez-vous que le chemin est correct
import logo from '../user/images/logo.png'; // Assurez-vous que le chemin est correct
import './Navbar.css'; // Assurez-vous que le chemin est correct
import { useCart } from '../contexts/CartContext'; // Importez le hook du contexte

function NavbarComponent() {
  const location = useLocation();
  const [activeLink, setActiveLink] = React.useState(location.pathname);
  const [showCart, setShowCart] = React.useState(false);
  const [showSearchModal, setShowSearchModal] = React.useState(false);
  const [showUserModal, setShowUserModal] = React.useState(false);

  const { cartItems, removeFromCart } = useCart(); // Utilisez le contexte du panier

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const toggleCart = () => setShowCart(!showCart);
  const handleSearchModalShow = () => setShowSearchModal(true);
  const handleSearchModalClose = () => setShowSearchModal(false);
  const handleUserModalShow = () => setShowUserModal(true);
  const handleUserModalClose = () => setShowUserModal(false);

  return (
    <>
      <Navbar bg="light" expand="lg" className='sticky-top shadow'>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="phone store" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={Link} to="/" className={activeLink === '/' ? 'selected' : ''}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className={activeLink === '/about' ? 'selected' : ''}>
                About
              </Nav.Link>
              <NavDropdown 
                title="Products" 
                id="basic-nav-dropdown" 
                className={activeLink.startsWith('/products') ? 'selected' : ''}>
                <NavDropdown.Item as={Link} to="/products" className={activeLink === '/products' ? 'selected' : ''}>
                  All Products
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/mobile" className={activeLink === '/products/mobile' ? 'selected' : ''}>
                  Mobile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/watch" className={activeLink === '/products/watch' ? 'selected' : ''}>
                  Watch
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/camera" className={activeLink === '/products/camera' ? 'selected' : ''}>
                  Camera
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/accessory" className={activeLink === '/products/accessory' ? 'selected' : ''}>
                  Accessory
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/gamme" className={activeLink === '/products/gamme' ? 'selected' : ''}>
                  Gamme
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/sales" className={activeLink === '/sales' ? 'selected' : ''}>
                Sales
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className={activeLink === '/blog' ? 'selected' : ''}>
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className={activeLink === '/contact' ? 'selected' : ''}>
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleSearchModalShow}>
                <FaSearch size={20} />
              </Nav.Link>
              <Nav.Link onClick={toggleCart} className="position-relative">
                <FaShoppingCart size={20} />
                {cartItems.length > 0 && <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItems.length}</span>}
              </Nav.Link>
              <Nav.Link onClick={handleUserModalShow}>
                <FaUser size={20} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <SearchModal show={showSearchModal} handleClose={handleSearchModalClose} />
      <UserModal show={showUserModal} handleClose={handleUserModalClose} />
      {showCart && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
    </>
  );
}

export default NavbarComponent;