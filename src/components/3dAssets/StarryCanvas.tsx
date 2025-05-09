import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls } from "@react-three/drei"

import Planet1 from "./Planet1";
import planet1File from './gltfFiles/Planet1.gltf'
export default function StarryCanvas() {
    return (
        <div id="canvas-container">
            <Canvas>
                <color
                    attach='background'
                    args={["black"]}
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                <Stars
                    radius={100} // Size of the starfield
                    depth={50} // Depth of the starfield
                    count={5000} // Number of stars
                    factor={4} // Parallax factor
                    saturation={0} // Saturation of the stars (0-1)
                    fade={true} // Enable fading of stars at the edges
                />
                <Suspense fallback={null} >
                    <Planet1
                        url={planet1File}
                    />
                </ Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    )
}
