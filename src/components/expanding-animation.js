import React, { Component } from 'react';

// Higher Order Component
const makeExpanding = Target => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { isOpen: false };
    }

    onClick() {
      this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
      return (
        <Target
          {...this.props}
          isOpen={this.state.isOpen}
          onClick={this.onClick.bind(this)}
        />
      );
    }
  }
}

export default makeExpanding;
