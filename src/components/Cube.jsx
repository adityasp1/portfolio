import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cube = () => {
    const textRef = useRef()
  useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime)*2))
  
    return (
     <mesh>
          <boxGeometry />
          <meshLambertMaterial>
          <RenderTexture attach="map">
            <PerspectiveCamera
            makeDefault
          position={[0,0,5]}
            />
            <color attach="background" args={['#31b9b7']} />
            <Text ref={textRef} fontSize={3} color="black">
              hello
            </Text>
          </RenderTexture>
          </meshLambertMaterial>
        </mesh>
  )
}

export default Cube
