import "./Gallery.css"

const Gallery = () => {

    const images = [
        {

            "img": "./img1.png"
        },
        {
            "img": "./img2.webp"
        },
        {
            "img": "./img3.png"
        },
        {
            "img": "./img4.webp"
        },
        {
            "img": "./img5.webp"
        },
        {
            "img": "./img6.png"
        }
    ]


    return(
        <div class="images-container">
  <header><h1>Galería</h1></header>
  <main class="gallery">
    {images.map((image, id) => (
      <figure key={id}>
        <img src={image.img} alt={`Imagen ${id}`} />
      </figure>
    ))}
  </main>
</div>
    )
};
export default Gallery;