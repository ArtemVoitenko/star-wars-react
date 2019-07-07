import React, { Component } from "react";

export default class ErrorBounry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    return hasError ? <div>Error</div> : this.props.children;
  }
}
