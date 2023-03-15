import { List } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false, largeURL: '' };

  closeESC = () => {
    this.setState({ isModalOpen: !true });
  };

  openModal = e => {
    this.setState({ isModalOpen: !false, largeURL: e.target.srcset });
  };

  closeModal = e => {
    if (e.target.className === 'overlay') {
      this.setState({ isModalOpen: !true });
    }
  };

  render() {
    console.log(this.props.loading);
    return (
      <List>
        {this.props.response.map(item => {
          return (
            <li className="gallery-item" key={item.id} onClick={this.openModal}>
              <img src={item.webformatURL} srcSet={item.largeImageURL} alt="" />
            </li>
          );
        })}
        {this.state.isModalOpen && this.state.largeURL !== undefined && (
          <Modal state={this.closeModal} close={this.closeESC}>
            <img className="large-img" src={this.state.largeURL} alt="" />
          </Modal>
        )}
      </List>
    );
  }
}
