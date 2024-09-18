import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../user/images/carousel1.jpg';  // Corrigez le chemin si nécessaire
import carousel2 from '../user/images/carousel2.jpg';
import carousel3 from '../user/images/carousel3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
import MoreProductsButton from './MoreProductsButton';

function UncontrolledExample() {
  return (
    <Carousel className="bg-dark custom-carousel-indicators">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1}  // Utilisez l'image importée
          alt="First slide"
          style={{filter: 'brightness(50%)'}}
        />
        <Carousel.Caption className="text-white d-flex flex-column justify-content-center align-items-start"
          style={{ left: '10%', top: '50%', transform: 'translateY(-50%)' }}>
          <h3 className='fs-1 fw-bold text-uppercase' style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>Phone Store</h3>
          <p className='fs-2'>Connecting Dreams, One Call at a Time</p>
          <div className='mt-3' >
          <MoreProductsButton /> {/* Utiliser le composant bouton */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel2}  // Utilisez l'image importée
          alt="Second slide"
          style={{filter: 'brightness(50%)'}}
        />
        <Carousel.Caption className="text-white d-flex flex-column justify-content-center align-items-start"
          style={{ left: '10%', top: '50%', transform: 'translateY(-50%)' }}>
        <h3 className='fs-1 fw-bold text-uppercase'style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>Phone Store</h3>
        <p className='fs-2'>Connecting Dreams, One Call at a Time</p>
        <div className='mt-3' >
          <MoreProductsButton /> {/* Utiliser le composant bouton */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel3}  // Utilisez l'image importée
          alt="Third slide"
          style={{filter: 'brightness(50%)'}}
        />
        <Carousel.Caption className="text-white d-flex flex-column justify-content-center align-items-start"
          style={{ left: '10%', top: '50%', transform: 'translateY(-50%)' }}>
        <h3 className='fs-1 fw-bold text-uppercase' style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>Phone Store</h3>
        <p className='fs-2'>Connecting Dreams, One Call at a Time</p>
        <div className='mt-3' >
          <MoreProductsButton /> {/* Utiliser le composant bouton */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
