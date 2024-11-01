import "./Gallery.css";
import { useState } from "react";
import OpenIcon from "./components/OpenIcon";
import CloseIcon from "./components/CloseIcon";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setTimeout(() => {
      setShowModal(true);
    }, 1); // Retraso de 100ms antes de aplicar la clase "show"
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setSelectedImage(null);
    }, 1); // Espera para quitar completamente el modal después de la animación
  };

  const images = [
    { img: "./img1.png" },
    { img: "./img2.webp" },
    { img: "./img3.png" },
    { img: "./img4.webp" },
    { img: "./img5.webp" },
    { img: "./img6.png" }
  ];

  return (
    <section 
      className="gallery-container"
    >
      <div className="images-container">
        <header><h1>Galería</h1></header>
        <main className="gallery">
          {images.map((image, id) => (
            <figure key={id}>
              <OpenIcon />
              <img 
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(image.img);
                }}
                src={image.img} 
                alt={`Imagen ${id}`} 
              />
            </figure>
          ))}

          {selectedImage && (
            <div
              className={`img-modal ${showModal ? "show" : ""}`}
              onClick={closeModal}
            >
              <div className="img-container-modal">
                <CloseIcon closeModalImg={closeModal} />
                <img src={selectedImage} alt="Imagen ampliada" />
              </div>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default Gallery;
