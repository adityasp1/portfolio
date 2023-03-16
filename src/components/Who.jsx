import React from 'react'
import styled from 'styled-components'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
align-items: center;
justify-content: center;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1200px;
display: flex;
justify-content: space-between;
`
const LeftWho = styled.div`
flex: 1;

`
const Title = styled.h1`
font-size: 74px;
`
const RightWho = styled.div`
flex: 1;
display: flex;
flex-direction: column;;
justify-content: center;
gap: 20px;
`
const Designation = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
const Line = styled.img`
height: 5px;
`
const Subtitle  = styled.h2`
color: yellow;
`
const Desc = styled.p`
font-size: 24px;
color: lightgray;
`
const Button = styled.button`
background-color: #077eed;
color: white;
font-weight: 500;
width: 12
0px;
padding: 15px;
border: none;
border-radius: 5px;
cursor: pointer;
`


const Who = () => {
  return (
    <Section>
      <Container>
        <LeftWho>
        <Canvas camera={{fov:25, position:[5,5,5]}}>
        <OrbitControls 
        enableZoom={false}
        autoRotate={false}
        />
        <ambientLight intensity={1} />
        <directionalLight position={[3,2,1]}/>
        <Cube />
      </Canvas>
         </LeftWho>
        <RightWho>
            <Title>Think Outside the Square Space.</Title>
            <Designation>
                <Line />
                <Subtitle>Frontend Developer</Subtitle>        </Designation>
            <Desc>"I specialize in building responsive and intuitive user interfaces using HTML, CSS, and JavaScript."</Desc>   
            <Button>See Our Work</Button> 
        </RightWho>
      </Container>
    </Section>
  )
}

export default Who
