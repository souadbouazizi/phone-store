import React, { useState, useEffect } from 'react';
import { Modal, Tabs, Tab, Form, FormControl, Button } from 'react-bootstrap';

function UserModal({ show, handleClose, initialTab }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    handleClose(); // Close modal after login
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Implement registration logic here
    handleClose(); // Close modal after registration
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Authentication</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey={initialTab} id="user-auth-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Tab eventKey="login" title="Login">
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <FormControl
                  type="text"
                  placeholder="Enter username"
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <FormControl
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="register" title="Register">
            <Form onSubmit={handleRegister}>
              <Form.Group controlId="newUsername">
                <Form.Label>Username</Form.Label>
                <FormControl
                  type="text"
                  placeholder="Enter username"
                />
              </Form.Group>
              <Form.Group controlId="newEmail">
                <Form.Label>Email</Form.Label>
                <FormControl
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="newPassword">
                <Form.Label>Password</Form.Label>
                <FormControl
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
}

export default UserModal;
