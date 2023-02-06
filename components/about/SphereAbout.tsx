import * as THREE from 'three'
import { useRef, useMemo} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import styles from '../../styles/About/sphereAbout.module.scss';


function Word({ children, ...props }) {
  const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef() 
  // Tie component to the render-loop
  useFrame(({ camera }) => {
   // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
  })

  return <Text  ref={ref}   {...props} {...fontProps} children={children} />
}

const arraySphere = ['react','redux','css','git','typescript','HTML','rest','NextJS']
const randomWords = (array) => {
   let randomWord = Math.floor(Math.random() * array.length )
       
      return array[randomWord]
  }

function Cloud({ count = 4, radius = 20 }) {
 // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), randomWords(arraySphere)])
   
       return temp 
  }, [count, radius])

  return words.map(([pos, word], index) =>
    <Word children={word}  key={index} position={pos} />)
}

export default function SphereAbout() {
// 
  return (
        <Canvas className={styles.sphereAbout} dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }} >
          <fog attach="fog"  args={['#08fdd8', 0, 0]} />
          <Cloud  count={6} radius={30}/>
          <TrackballControls />
        </Canvas>
      )
}
