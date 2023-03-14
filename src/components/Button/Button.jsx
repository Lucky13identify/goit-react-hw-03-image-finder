import React, { Component } from 'react';
import axios from 'axios';

// export const Button = ({ response, value }) => {};

export class Button extends Component {
  state = { newResponse: null };

  responseServer = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${this.props.value}&page=1&key=33641597-af0dded98b621629426cb08e5&image_type=photo&orientation=horizontal&per_page=12`
      );
      // this.setState({ newResponse: response });
      this.setState({
        newResponse: [...this.props.response, ...response.data.hits],
      });

      return await response;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.responseServer}>
          Load more
        </button>
      </div>
    );
  }
}
