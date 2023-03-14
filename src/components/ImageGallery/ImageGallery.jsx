import React, { Component } from 'react';
import axios from 'axios';
import { Audio } from 'react-loader-spinner';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

// import { Button } from '../Button/Button';

export class ImageGallery extends Component {
  state = {
    response: [],
    page: 1,
    inputValue: '',
    loading: false,
  };

  onLoadMore = async () => {
    this.setState({ loading: true });

    try {
      const response = await axios
        .get(
          `https://pixabay.com/api/?q=${this.state.inputValue}&page=${this.state.page}&key=33641597-af0dded98b621629426cb08e5&image_type=photo&orientation=horizontal&per_page=12`
        )
        .finally(() => this.setState({ loading: false }));
      this.setState(prevState => {
        return {
          response: [...prevState.response, ...response.data.hits],
          page: prevState.page + 1,
        };
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  onChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div>
        <Searchbar
          onSubmit={e => {
            e.preventDefault();
            this.setState({ response: [], page: 1 });
            setTimeout(() => this.onLoadMore(), 100);
          }}
          onChange={this.onChange}
        />
        <List className="gallery">
          {this.state.loading ? (
            <Audio />
          ) : (
            <ImageGalleryItem response={this.state.response} />
          )}
        </List>

        <button type="button" onClick={this.onLoadMore}>
          Load more
        </button>
      </div>
    );
  }
}
