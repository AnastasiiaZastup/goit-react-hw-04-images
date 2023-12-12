import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(item => {
        const { id, webformatURL, largeImageURL, tags } = item;
        return (
          <ImageGalleryItem
            image={webformatURL}
            largeImage={largeImageURL}
            tags={tags}
            key={id}
          />
        );
      })}
    </ul>
  );
};
