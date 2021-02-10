import {useRef} from 'react';
import * as THREE from 'three';
import {useFrame} from 'react-three-fiber';
import Helvetica from '../../HelveticaBoldRegular.json';

function Text(props) {
  const mesh = useRef(null)

  useFrame(() => {
    mesh.current.geometry.center()
    mesh.current.rotation.y += 0.02 
  })

  const font = new THREE.FontLoader().parse(Helvetica);

  const textOptions = {
    font,
    size: 4,
    height: .8,
  }

  return (
    <mesh position = {[0, 5, 0]} ref = {mesh}>
      <textGeometry atach = 'geometry' args = {['Hello World', textOptions]} />
      <meshStandardMaterial attach = 'material' />
    </mesh>
  )
}


export default Text;
