import React, { Component } from 'react';
import axios from 'axios';
import { Audio } from 'react-loader-spinner';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

// модалка
// компоненты
// пропсs
// стили
// состояния

export class App extends Component {
  render() {
    return (
      <div>
        <ImageGallery />
      </div>
    );
  }
}
