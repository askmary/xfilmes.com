import React from "react"
import Axios from "axios"
import styled from "styled-components"

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


const ApiSeries = Axios.create({
    baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=pt-BR"
})
export default class App extends React.Component{
    state = {
        listSeries: [],
        seriesFiltradas: []
    }
    async componentDidMount(){
        const response = await ApiSeries.get()
        console.log(response.data.results)
        const Series = response.data.results.map((item) => {
            return{
                ...item,
                poster:`https://image.tmdb.org/t/p/w500/${item.poster_path}`
            }
        })
        this.setState({
            listSeries:Series,
            seriesFiltradas:Series
        })
    }
    filtrarSeries = (e) => {
        const {listSeries} = this.state
        if(e.target.value === ""){
          this.Setstate({
            seriesFiltradas: listSeries
          })
          return
        }
        const seriesFilter = listSeries.filter((item) => {
          if (item.name.toLowerCase().includes(e.target.value.toLowerCase())){
            return true
          }
        })
        this.setState({
            seriesFiltradas: seriesFilter
          })
        }
    render(){
        return(
            <div>
                <TitleH1>SÉRIES</TitleH1>
                <Search type="text" placeholder="Busque aqui sua série..." onChange={this.filtrarSeries}/>
                {this.state.seriesFiltradas.map((item) => (
                    <div>
                        <h2>{item.name}</h2>
                        <img src={item.poster} alt={`Capa da série ${item.name}`} title={`Série "${item.name}"`}/>
                        <p>{item.overview}</p>
                    </div>
                ))}
            </div>
        )
    }
}
