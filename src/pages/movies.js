import React from "react"
import Axios from "axios"
import styled from "styled-components"


const Container = styled.div`
 width:100%;
 display:flex;
 flex-direction:column;
 
`
const SubContainer = styled.div`
 background-color:pink;
 width:100%;
 height:50vh;
 display:flex;
 margin-top:3vh;
`
const TitleH1 = styled.h1`
 font-size:2.5rem;
 padding: 2vh 0 2vh 2vw;
`
const Search = styled.input`
 width:12vw;
 border-radius:20px;
 padding-left:0.5vw;
 font-size:1rem;
 margin: 0 0 2vh 2vw;
 color:black;
`
const Img = styled.img`
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
              <TitleH1>FILMES</TitleH1>
              <Search type="text" placeholder="Busque aqui seu filme!" onChange={this.filtrarFilmes}/>
              {this.state.filmesFiltrados.map((item) => (
              <SubContainer>
                <h2>{item.title}</h2>
                <Img src={item.poster} alt={`Capa do filme ${item.title}`} title={`Filme "${item.title}"`} />
                <p>{item.overview}</p>
              </SubContainer>
            ))}
          </Container>
        )
      }
}
    
  