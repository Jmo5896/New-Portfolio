import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"

export default function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <color
          attach='background'
          args={["black"]}
        />
        <Stars />
        {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh> */}
      </Canvas>
    </div>
  )
}
