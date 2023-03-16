import { OrbitControls ,MeshDistortMaterial, Sphere } from '@react-three/drei'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1200px;
display: flex;
justify-content: space-between;
`
const LeftHero = styled.div`
flex: 2;
display: flex;
flex-direction: column;;
justify-content: center;
gap: 20px;
`
const Title = styled.h1`
font-size: 74px;
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
width: 100px;
padding: 15px;
border: none;
border-radius: 5px;
cursor: pointer;
`
const RightHero = styled.div`
flex: 3;
position: relative;
`
const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate {
    100%{
      transform: translateY(30px);
    }
}
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <LeftHero>
            <Title>ADITYA RAWAT</Title>
            <Designation>
                <Line />
                <Subtitle>Frontend Developer</Subtitle>        </Designation>
            <Desc>"I specialize in building responsive and intuitive user interfaces using HTML, CSS, and JavaScript."</Desc>   
            <Button>Learn More</Button> 
        </LeftHero>
        <RightHero>
        <Canvas >
        <OrbitControls 
        enableZoom={false}/>
        <ambientLight intensity={1} />
        <directionalLight position={[3,2,1]}/>
        <Sphere args={[1,100,200]} scale={2.5} >
        <MeshDistortMaterial 
        color='#077eed' attach="material" distort={0.5} speed={2}
        />
        </Sphere>
      </Canvas>
              <Img src= "./img/moon.png" />  
        </RightHero>
      </Container>
    </Section>
  )
}

export default Hero
