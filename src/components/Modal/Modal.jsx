import React, { Component } from 'react';
export class Modal extends Component {
  render() {
    return (
      <div className="overlay" onClick={this.props.state}>
        <div className="modal">{this.props.children}</div>
      </div>
    );
  }
}

// export const Modal = ({ children }) => {
//   return (
//     <div className="overlay">
//       <div className="modal">{children}</div>
//     </div>
//   );
// };
