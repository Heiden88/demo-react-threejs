import React from 'react';
import ReactDOM from 'react-dom';
import {Canvas} from 'react-three-fiber'
import './index.css';
import Text from './components/Text';

ReactDOM.render(
  <div>
    <Canvas 
      camera = {{position: [0, 0, 30]}}
      style = {{height: '100vh', width: '100vw'}}
    >
      <Text />
    </Canvas>
  </div>,
  document.getElementById('root')
);
