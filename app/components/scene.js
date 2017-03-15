import React, {Component} from 'react';

import Stats from 'stats.js';
import {Scene, WebGLRenderer} from 'three';

class SceneComponent extends Component {
  componentDidMount() {
    console.log(this);
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {

    // const scene = new Scene();
    // scene.fog = new Three.Fog( 0x050505, 2000, 3500 );

    // const renderer = new WebGLRenderer( { antialias: false } );
    // renderer.setClearColor( scene.fog.color );
    // renderer.setPixelRatio( window.devicePixelRatio );
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // return renderer.domElement;

    return <canvas className="app__canvas" />;
  }
}

export default SceneComponent;