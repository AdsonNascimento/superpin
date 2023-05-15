import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './ImageGallery.scss'

const ImageGallery = ({ basePath }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = [];

      for (let i = 1; ; i++) {
        const imageUrl = `${basePath}/foto${i}.jpg`;

        try {
          const response = await fetch(imageUrl);
          if (response.ok) {
            fetchedImages.push(imageUrl);
          } else {
            break; // Interrompe o loop quando não encontra mais imagens
          }
        } catch (error) {
          console.log(`Erro ao buscar a imagem ${i}`);
          break; // Interrompe o loop em caso de erro
        }
      }

      setImages(fetchedImages);
    };

    fetchImages();
  }, [basePath]);

  return (
    <>

      {images.length > 0 ? (
        <div className='imagens-clients'>
          {images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Imagem ${index + 1}`} />
          ))}
        </div>
      ) : (
        <>
          <div className='load'>
            <p>Carregando imagens...</p>
          </div>
        </>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  basePath: PropTypes.string.isRequired,
};


export default ImageGallery;
