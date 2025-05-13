import { Suspense } from "react"
// import { Canvas, useThree } from "@react-three/fiber"
import { Canvas } from "@react-three/fiber"
import { Stars, PerspectiveCamera } from "@react-three/drei"
// import { Stars, OrbitControls, PerspectiveCamera } from "@react-three/drei"
// import * as THREE from 'three';
import Planet1 from "./Planet1";
import planet1File from './gltfFiles/Planet1.gltf'
import type { StarryCanvasProps } from "../../customTypes/interfaces";

export default function StarryCanvas({ cameraPosition }: StarryCanvasProps) {


    return (
        <div id="canvas-container">
            <Canvas>
                <PerspectiveCamera makeDefault fov={75} position={cameraPosition}
                />
                <color
                    attach='background'
                    args={["black"]}
                />
                <ambientLight intensity={0.25} />
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
                {/* <OrbitControls /> */}
            </Canvas>
        </div>
    )
}
