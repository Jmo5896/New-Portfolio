import { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

interface planet1Props {
    url: string;
}

const Planet1 = ({ url }: planet1Props) => {
    const gltf = useLoader(GLTFLoader, url);

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

    return gltf ? <primitive object={gltf.scene} /> : null;
}

export default Planet1