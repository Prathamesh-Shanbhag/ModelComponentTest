import React from 'react'
import { useGLTF } from '@react-three/drei'
function ModelComponent(props) {
  const gltf = useGLTF('../GLTF/1a.glb')
  console.log(props.position)
  return <primitive position={props.position} object={gltf.scene} />
}
export default ModelComponent

// const gltf = useGLTF('../GLTF/1a.glb')
// return <primitive object={gltf.scene} />
