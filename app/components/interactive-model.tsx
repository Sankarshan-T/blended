"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";

useGLTF.preload("/models/hc.glb");
useGLTF.preload("/models/icecream.glb");

function Model({ scenepath }: { scenepath: string }) {
    // 1. Fetch both the scene and the animations array from the glTF file
    const { scene, animations } = useGLTF(scenepath);

    // 2. Create a reference pointing to the primitive object
    const modelRef = useRef(null);

    // 3. Pass the animations and the ref into the useAnimations hook
    const { actions, names } = useAnimations(animations, modelRef);

    // 4. Play the first available animation track when the model loads
    useEffect(() => {
        if (names.length > 0) {
            // Plays the first animation track found in your glTF file
            actions[names[0]]?.reset().fadeIn(0.5).play();
        }

        // Optional cleanup to fade out when the model path changes
        return () => {
            actions[names[0]]?.fadeOut(0.5);
        };
    }, [actions, names, scenepath]);

    // 5. Attach the ref to your primitive object
    return <primitive ref={modelRef} object={scene} scale={1.5} />;
}

export default function InteractiveModel({ scenepath, color }: { scenepath: string; color?: boolean }) {
    if (!scenepath) {
        return null;
    }

    return (
        <div className="h-[360px] w-full overflow-hidden rounded-md">
            <Canvas camera={{ position: [0, 0, 4.4], fov: 45 }} dpr={[1, 2]}>
                <ambientLight intensity={1.2} />
                {color && <color attach="background" args={["#25262b"]} />}
                <directionalLight position={[4, 5, 4]} intensity={3} color="#fff1e6" />
                <pointLight position={[-4, -2, 2]} intensity={12} distance={8} color="#f47721" />
                <Suspense fallback={null}>
                    <Model scenepath={scenepath} />
                </Suspense>
                <OrbitControls
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={1}
                    minDistance={2.8}
                    maxDistance={6}
                />
            </Canvas>
        </div>
    );
}
