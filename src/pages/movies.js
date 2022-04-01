import React from "react"
import Axios from "axios"
import styled from "styled-components"

const Container = styled.div`
 width:100%;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
`
const Container2 = styled.div`
 width:40%;
 display:flex;
 align-items:center;
 justify-content:center;
`
const TitleH1 = styled.h1`
 font-size:2.5rem;
 padding: 2vh 2vw 2vh 2vw;
`
const Search = styled.input`
 width:12vw;
 height:3vh;
 border-radius:10px;
 padding-left:0.5vw;
 font-size:1rem;
 margin: 2vh 2vw 2vh 2vw;
 color:black;
`
const SubContainer = styled.div`
 background-color:#1C1C1C;
 border: outset 2px #8B7B8B;
 width:45%;
 height:50vh;
 display:flex;
 align-items:center;
 margin-top:3vh;
`
const Img = styled.img`
 height:49.7vh;
`
const DIV = styled.div`
 height:40vh;
 display:flex;
 flex-direction:column;
 align-items: center;
 justify-content:space-around;
`
const Subtitle = styled.h2`
 width:95%;
 color:red;
`
const Overview = styled.p`
width:95%;
`

const ApiFilms = Axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=pt-BR"
  }) 
  
  export default class App extends React.Component{
    state = {
      listFilm:[],
      filmesFiltrados: []
    }
    async componentDidMount(){
      const response = await ApiFilms.get()
      console.log(response.data.results)
      const Films = response.data.results.map((item) => {
        return{
          ...item,
          poster:`https://image.tmdb.org/t/p/w500/${item.poster_path}`
        }
      })
      this.setState({
        listFilm:Films,
        filmesFiltrados:Films
      })
    }
    filtrarFilmes = (e) => {
      const {listFilm} = this.state
      if(e.target.value === ""){
        this.Setstate({
          filmesFiltrados: listFilm
        })
        return
      }
      const filmsFilter = listFilm.filter((item) => {
        if (item.title.toLowerCase().includes(e.target.value.toLowerCase())){
          return true
        }
      }) 
      this.setState({
        filmesFiltrados: filmsFilter
      })
    }
    render(){
        return(
            <Container>
              <Container2>
              <TitleH1>FILMES</TitleH1>
              <Search type="text" placeholder="Busque aqui seu filme!" onChange={this.filtrarFilmes}/>
              </Container2>
              {this.state.filmesFiltrados.map((item) => (
              <SubContainer>
                <Img src={item.poster} alt={`Capa do filme ${item.title}`} title={`Filme "${item.title}"`} />
                <DIV>
                <Subtitle>{item.title}</Subtitle>
                <Overview>{item.overview}</Overview>
                </DIV>
              </SubContainer>
            ))}
          </Container>
        )
      }
}
    
  