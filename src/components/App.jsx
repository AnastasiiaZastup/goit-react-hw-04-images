import React, { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImage } from './api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getImagesFunc() {
      try {
        setIsLoading(true);
        const initialFetch = await fetchImage(query, page);
        setImages(prevImages => [...prevImages, ...initialFetch.hits]);
        setShowBtn(page < Math.ceil(initialFetch.totalHits / 12));
      } catch (errors) {
        setErrors(errors);
      } finally {
        setIsLoading(false);
      }
    }

    getImagesFunc();
  }, [query, page]);

  const handleSubmit = newValue => {
    setQuery(newValue);
    setPage(1);
    setImages([]);
    setErrors(null);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />

      {errors && <p className="messages">Opps, try again</p>}

      {images.length > 0 && <ImageGallery images={images} />}
      {showBtn && <Button onClick={handleLoadMore} />}

      {isLoading && <Loader />}
      <Toaster />
    </div>
  );
};
