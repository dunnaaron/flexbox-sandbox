import React from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'
import Box4 from './Box4'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const App = () => (
  <Container id='container'>
    <Box1 id='box1'/>
    <Box2 id='box2'/>
    <Box3 id='box3'/>
    <Box4 id='box4'/>
  </Container>
)

export default App