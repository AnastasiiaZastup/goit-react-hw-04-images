import React, { useState } from 'react';
import { CustomModal } from '../Modal/Modal';

export const ImageGalleryItem = ({ image, largeImage, tags }) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const totalModal = () => {
    setmodalIsOpen(prevState => !prevState);
  };

  return (
    <div>
      <li className="ImageGalleryItem" onClick={totalModal}>
        <img className="ImageGalleryItem-image" src={image} alt={tags} />
      </li>
      {modalIsOpen && (
        <CustomModal
          isOpen={modalIsOpen}
          onClose={totalModal}
          largeImg={largeImage}
          tags={tags}
        />
      )}
    </div>
  );
};
