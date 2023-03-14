import { List } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false, largeURL: '' };

  toogleModal = e => {
    this.setState({ isModalOpen: !false, largeURL: e.target.srcset });
  };

  render() {
    return (
      <List>
        {this.props.response.map(item => {
          return (
            <li
              className="gallery-item"
              key={item.id}
              onClick={this.toogleModal}
            >
              <img src={item.webformatURL} srcSet={item.largeImageURL} alt="" />
            </li>
          );
        })}
        {this.state.isModalOpen && this.state.largeURL !== undefined && (
          <Modal state={this.toogleModal}>
            <img src={this.state.largeURL} alt="" />
          </Modal>
        )}
      </List>
    );
  }
}

// export const ImageGalleryItem = ({ response }) => {
//   return response.map(item => {
//     return (
// <List className="gallery-item" key={item.id}>
//   <img src={item.webformatURL} alt="" />
// </List>
//     );
//   });
// };
