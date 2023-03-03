import * as THREE from "three";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, ReactThreeFiber, Object3DNode } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
import { arraySphere } from "../constants/default_data";
import styles from "../../styles/About/sphereAbout.module.scss";

function Word(props: WordProps) {
    const fontProps = {
        fontSize: 2.5,
        letterSpacing: -0.05,
        lineHeight: 1,
        "material-toneMapped": false,
    };
    const ref = useRef<THREE.Mesh>();
    useFrame(({ camera }) => {
        ref.current?.quaternion.copy(camera.quaternion);
    });

    return (
        <Text ref={ref} {...props} {...fontProps} color={"aquamarine"}>
            {props.text}
        </Text>
    );
}

interface WordProps extends ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh> {
    text: string;
}

const randomWords = (array: Array<string>) => {
    const randomWord = Math.floor(Math.random() * array.length);
    return array[randomWord];
};

function Cloud({ count = 2, radius = 5 }) {
    // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;
        for (let i = 1; i < count + 1; i++)
            for (let j = 0; j < count; j++)
                temp.push({
                    position: new THREE.Vector3().setFromSpherical(
                        spherical.set(radius, phiSpan * i, thetaSpan * j),
                    ),
                    text: randomWords(arraySphere),
                });

        return temp;
    }, [count, radius]);

    return (
        <>
            {words.map(({ position, text }, index) => (
                <Word key={index} position={position} text={text} />
            ))}
        </>
    );
}

export default function SphereAbout() {
    return (
        <Canvas
            className={styles.sphereAbout}
            dpr={[1, 2]}
            camera={{ position: [0, 0, 50], fov: 90 }}
        >
            <fog />
            <Cloud count={6} radius={30} />
            <TrackballControls />
        </Canvas>
    );
}
