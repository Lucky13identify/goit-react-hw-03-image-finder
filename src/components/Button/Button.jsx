import React, { Component } from 'react';
import { DivButton, LoadMore } from './Button.styled';

export class Button extends Component {
  render() {
    return (
      <DivButton className="load-more">
        <LoadMore type="button" onClick={this.props.onClick}>
          Load more
        </LoadMore>
      </DivButton>
    );
  }
}
