import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}
from "react-router-dom"

import Home from "./pages/home"
import Movies from "./pages/movies"
import Series from "./pages/series"

const GlobalStyle = createGlobalStyle`
 *{
   margin:0;
   padding:0;
   box-sizing:border-box;
   color:white;
   font-family: 'Questrial', sans-serif;
 }
 body{
   width:100%;
   height:100vh;
   background-color:black;
 }
`
const Title = styled.h1`
 color:red;
 text-align:center;
 font-size:3rem;
 background-color:#1C1C1C;
 padding: 2vh 0 2vh 0;
`
const Navbar = styled.nav`
 width:100%;
 display:flex;
 align-items:center;
`
const List = styled.ul`
 background-color:#1C1C1C;
 border-bottom:outset #8B7B8B 5px;
 width:100%;
 height:8vh;
 display:flex;
 justify-content:space-evenly;
 align-items:center;
 list-style:none;
`
const Item = styled.li`
 font-size:1.5rem;
`
const StyledLink = styled(Link)`
 text-decoration:none;
 transition: 1s;
 &:hover{
   color:#EE0000;
   cursor:pointer;
 }
`

export default class App extends React.Component{
  render(){
    return(
      <Router>
        <GlobalStyle/>
        <Title>XFILMES.COM</Title>
         <Navbar>
          <List>
            <Item>
              <StyledLink to="/">HOME</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/filmes">FILMES</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/series">SÉRIES</StyledLink>
            </Item>
          </List>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/filmes" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
        </Routes>
    </Router>
    )
  }
}
