import React from "react"
import Axios from "axios"

const ApiFilms = Axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=pt-BR"
  }) 
  
  export default class App extends React.Component{
    state = {
      listFilm:[]
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
      this.setState({listFilm:Films})
    }
    render(){
        return(
            <div>
              <h1>FILMES</h1>
              {this.state.listFilm.map((item) => (
              <div>
                <h2>{item.title}</h2>
                <img src={item.poster} alt={`Capa do filme ${item.title}`} title={`Filme "${item.title}"`} />
                <p>{item.overview}</p>
              </div>
            ))}
          </div>
        )
      }
}
    
  