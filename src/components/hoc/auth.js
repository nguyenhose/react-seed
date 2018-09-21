import React, { Component } from 'react'
import { connect } from 'react-redux';
export default function (ComposedComponent, props) {
  class Authencation extends Component {
    render() {
      return (
        <ComposedComponent {...this.props} />
    )}
  }
  return () => <Authencation />
}
