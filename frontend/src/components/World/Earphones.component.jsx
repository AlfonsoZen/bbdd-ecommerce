import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Box() {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y -= delta))

  const earPhones = useGLTF("./headphones_airpods_pro/scene.gltf")
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      ref={ref} 
      >

      <primitive
        object={earPhones.scene}
        scale={.47}
        rotation={[0,0,0]}
        position={[0,-2.8,0]}
      />
    </mesh>
  )
}

const EarPhones = () => {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box/>
      <OrbitControls />
    </Canvas>
  )
}

export default EarPhones;