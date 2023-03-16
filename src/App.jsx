import styled from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Work from "./components/Work"

const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background: url("https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
background-size: cover;
&::-webkit-scrollbar{
  display: none;
}
`

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Work />
      <Contact/>
      
    </Container> 
  )
}

export default App
