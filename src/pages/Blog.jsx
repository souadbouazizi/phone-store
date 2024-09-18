import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Blog1 from '../user/images/Blog1.jpg'; // Si nécessaire
import Blog2 from '../user/images/Blog2.jpg'; // Si nécessaire
import Blog3 from '../user/images/Blog3.jpg'; // Si nécessaire
import Blog4 from '../user/images/Blog4.jpg'; // Si nécessaire
import './Blog.css';

function Blog() {
  return (
    <div>
      <Container className='my-5'>
        <h1>Latest Posts</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reprehenderit impedit eius optio assumenda architecto error nemo odit magnam velit.</p>

        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <Row className="d-flex flex-row" style={{ flexWrap: 'nowrap' }}>
            <Col md={4} className="mb-4" style={{ minWidth: '400px' }}>
              <Card className='overflow-hidden text-center'>
                <Card.Img variant="top" src={Blog1} className="zoom-image"/>
				<Card.Body className='mt-5'>
				<p className='small mt-5'>Jan 22, 2024</p>
                  <Card.Title>Get some cool gadgets in 2023</Card.Title>
                  <Card.Text>
				  <p> Some quick example text to build on   <br/>the card title and make up the bulk <br/> of the card's content.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4" style={{ minWidth: '400px' }}>
              <Card className='overflow-hidden text-center'>
			  <Card.Img variant="top" src={Blog2} className="zoom-image"/>
			  <Card.Body className='mt-5'>
			  <p className='small mt-5'>Mars 06, 2024</p>
                  <Card.Title>Get some cool gadgets in 2023</Card.Title>
                  <Card.Text>
                   <p> Some quick example text to build on   <br/>the card title and make up the bulk <br/> of the card's content.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4" style={{ minWidth: '400px' }}>
              <Card className='overflow-hidden text-center'>
			  <Card.Img variant="top" src={Blog3} className="zoom-image"/>
			  <Card.Body className='mt-5'>
			  <p className='small mt-5'>Jun 15, 2024</p>
                  <Card.Title>Get some cool gadgets in 2023</Card.Title>
                  <Card.Text>
				  <p> Some quick example text to build on   <br/>the card title and make up the bulk <br/> of the card's content.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4" style={{ minWidth: '400px' }}>
              <Card className='overflow-hidden text-center'>
			  <Card.Img variant="top" src={Blog4} className="zoom-image"/>
                <Card.Body className='mt-5'>
                  <p className='small mt-5'>Aug 25, 2024</p>
                  <Card.Title>Get some cool gadgets in 2023</Card.Title>
                  <Card.Text>
				  <p> Some quick example text to build on   <br/>the card title and make up the bulk <br/> of the card's content.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Blog;
