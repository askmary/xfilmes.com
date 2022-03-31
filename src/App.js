import React from "react"
import styled from "styled-components"
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

export default class App extends React.Component{
  render(){
    return(
      <Router>
         <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/filmes">FILMES</Link>
            </li>
            <li>
              <Link to="/series">SÉRIES</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/filmes" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
        </Routes>
    </Router>
    )
  }
}
