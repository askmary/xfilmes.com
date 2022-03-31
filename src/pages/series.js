import React from "react"
import Axios from "axios"


const ApiSeries = Axios.create({
    baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=pt-BR"
})
export default class App extends React.Component{
    state = {
        listSeries: []
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
        this.setState({listSeries:Series})
    }
    render(){
        return(
            <div>
                <h1>SÉRIES</h1>
                {this.state.listSeries.map((item) => (
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
