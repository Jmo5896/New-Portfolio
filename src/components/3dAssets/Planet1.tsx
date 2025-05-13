import { useEffect, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

import type { planet1Props } from '../../customTypes/interfaces';

const Planet1 = ({ url }: planet1Props) => {
    const gltf = useLoader(GLTFLoader, url);
    const planetRef = useRef<THREE.Object3D>({} as THREE.Object3D);

    useEffect(() => {
        if (gltf) {
            gltf.scene.traverse((child: any) => {
                if (child instanceof THREE.Mesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
        }
    }, [gltf]);

    useFrame(() => {
        // planetRef.current.rotation.x += 0.01;
        planetRef.current.rotation.y += 0.001;
    })

    return gltf ? <primitive ref={planetRef} object={gltf.scene} /> : null;
}

export default Planet1