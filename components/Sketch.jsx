import React, { Component } from 'react';
import sketch from '../sketch/sketch';
import dynamic from 'next/dynamic';

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  loading: () => <div></div>,
  ssr: false,
});

export default class SketchWrapper extends Component {
  renderP5 = () => {
    return <P5Wrapper sketch={sketch} />;
  };

  render() {
    return <div className='sketch-wrapper'>{this.renderP5()}</div>;
  }
}
