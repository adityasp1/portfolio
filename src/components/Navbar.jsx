import React from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'

const Section = styled.div`
display:flex;
justify-content: center;
`;
const Container = styled.div`
width: 1000px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0px;
`;
const Links = styled.div`
display: flex;
align-items: center;
gap: 40px;
`;
const h2  = styled.div`
height: 150px;
cursor: pointer;
`;
const Icons  = styled.div`
display: flex;
align-items: center;
gap: 40px;
`;

const Icon = styled.img`
width: 30px;
cursor: pointer;
`;

const List  = styled.ul`
display: flex;
gap: 20px;
list-style: none;
`;
const ListItem  = styled.li`
cursor: pointer;
`;
const Button  = styled.button`
width: 100px;
padding: 10px;
background-color: #077eed;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`

const Navbar = () => {
  return (
    <Section>
        <Container>
      <Links>
      <h2>Portfolio</h2>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Studio</ListItem>
        <ListItem>Works</ListItem>
        <ListItem>Contact</ListItem>
      </List>
      </Links>
      <Icons>
        < AiOutlineSearch />
        <Button>Hire Now</Button>
      </Icons>
      </Container>
    </Section>
  )
}

export default Navbar
