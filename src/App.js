import './App.css'
import { OrbitControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import ModelComponent from './components/ModelComponent'
const modelArray = [1, 2, 3]
// const randomize = [(Math.random() - 0.5) * 10]

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas frameloop="demand">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          {modelArray.map((i) => {
            return (
              <ModelComponent key={i} position={Math.random() - 0.5 * 10} />
            )
          })}
          <Stats />
        </Canvas>
      </Suspense>
    </>
  )
}

export default App
