import * as React from 'react'
import useMeasure from 'react-use-measure'
import { useTrail, animated } from '@react-spring/web'
import { useEffect } from 'react'
import styles from '../styles/Drag.module.scss'

const fast = { tension: 1000, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-150%,-150%,0)`

export default function Drag() {
  const [trail, api] = useTrail(5, i => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }))
  const [ref, { left, top }] = useMeasure()

  const handleMouseMove = e => {
    api.start({ xy: [e.clientX - left, e.clientY - top] })
  }
 
  return (
    
    <div className={styles.container}>
         <div ref={ref} className={styles.hooksMain} onMouseMove={handleMouseMove}>
             {trail.map((props, index) => (
                  <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
             ))}
         </div>
     </div>
   
  )
}

