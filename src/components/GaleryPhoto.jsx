import React, { useState } from 'react';
import { Modal, Button, Row, Col, Container } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';
import './GaleryPhoto.css'; // Fichier CSS pour personnalisation
// Importation des images depuis le dossier src/user/images
import photoGallery1 from '../user/images/photo-gallery1.png';
import photoGallery2 from '../user/images/photo-gallery2.png';
import photoGallery3 from '../user/images/photo-gallery3.png';
import photoGallery4 from '../user/images/photo-gallery4.png';
import photoGallery5 from '../user/images/photo-gallery5.png';
import photoGallery6 from '../user/images/photo-gallery6.png';
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import { IoCloseCircleSharp } from "react-icons/io5";


// Données des images
const galleryImages = [
  { id: 1, src: photoGallery1, instagramLink: 'https://www.instagram.com' },
  { id: 2, src: photoGallery2, instagramLink: 'https://www.instagram.com' },
  { id: 3, src: photoGallery3, instagramLink: 'https://www.instagram.com' },
  { id: 4, src: photoGallery4, instagramLink: 'https://www.instagram.com' },
  { id: 5, src: photoGallery5, instagramLink: 'https://www.instagram.com' },
  { id: 6, src: photoGallery6, instagramLink: 'https://www.instagram.com' },
  // Ajoutez plus d'images si nécessaire
];


function GaleryPhoto() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
  
    // Ouvrir le modal avec l'image sélectionnée
    const handleImageClick = (index) => {
      setSelectedImage(galleryImages[index].src);
      setCurrentIndex(index);
    };
  
    // Naviguer vers l'image précédente
    const handlePrevious = () => {
      const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
      setSelectedImage(galleryImages[newIndex].src);
      setCurrentIndex(newIndex);
    };
  
    // Naviguer vers l'image suivante
    const handleNext = () => {
      const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(galleryImages[newIndex].src);
      setCurrentIndex(newIndex);
    };
  
    // Fermer le modal
    const handleClose = () => {
      setSelectedImage(null);
      setCurrentIndex(null);
    };
  
    return (
      <Container fluid className="gallery-container overflow-hidden">
        <Row className='gap-0'>
          {galleryImages.map((image, index) => (
            <Col key={image.id} md={2} className="gallery-col p-0 gap-0 overflow-hidden" onClick={() => handleImageClick(index)}>
              <div className="gallery-image-container">
                <img src={image.src} alt={`Gallery ${image.id}`} className="gallery-image w-100" />
                <a href={image.instagramLink} target="_blank" rel="noopener noreferrer" className="instagram-link">
                  <FaInstagram className="instagram-icon" />
                </a>
              </div>
            </Col>
          ))}
        </Row>
  
        {/* Modal pour afficher l'image */}
        {selectedImage && (
          <Modal show={true} onHide={handleClose} centered>
            <Modal.Body className="text-center">
              <img src={selectedImage} alt="Selected" className="w-100" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handlePrevious}><GrChapterPrevious /></Button>
              <Button variant="secondary" onClick={handleNext}><GrChapterNext /></Button>
              <Button variant="danger" onClick={handleClose}><IoCloseCircleSharp /></Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    );
  }
  
  export default GaleryPhoto;