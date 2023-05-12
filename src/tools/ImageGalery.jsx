import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ImageGallery = ({ folderPath }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(folderPath);
        const parser = new DOMParser();
        const dom = parser.parseFromString(response.data, 'text/html');
        const imageLinks = Array.from(dom.querySelectorAll('a[href$=".jpg"], a[href$=".png"], a[href$=".jpeg"], a[href$=".webp"]'))
          .map((link) => folderPath + '/' + link.getAttribute('href'));
        setImages(imageLinks);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [folderPath]);

  ImageGallery.propTypes = {
    folderPath: PropTypes.string.isRequired,
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
