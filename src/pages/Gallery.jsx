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
            "img": "./img1.png"
        },
        {
            "img": "./img1.png"
        }
    ]


    return(
        <div class="images-container">
  <header><h1>Gallery</h1></header>
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