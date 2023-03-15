import React, { Component } from 'react';
import axios from 'axios';
import { CirclesWithBar } from 'react-loader-spinner';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';

// пропсs
// стили

export class App extends Component {
  state = {
    response: [],
    page: 1,
    inputValue: '',
    loading: false,
  };

  onLoadResults = async () => {
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
            setTimeout(() => this.onLoadResults(), 100);
          }}
          onChange={this.onChange}
        />
        <ImageGallery>
          <ImageGalleryItem response={this.state.response} />
        </ImageGallery>

        {this.state.loading && (
          <div className="audio">
            <div className="audio-margin">
              <CirclesWithBar height="40" width="40" color="blue" />
            </div>
          </div>
        )}

        {this.state.response.length > 0 && !this.state.loading && (
          <Button onClick={this.onLoadResults} />
        )}
      </div>
    );
  }
}
