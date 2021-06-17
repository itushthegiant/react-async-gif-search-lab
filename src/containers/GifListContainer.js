import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'




export default class GifListContainer extends Component {


    state = {
        gifs: []
    }




    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=UQmRuHtG63PBD5rrDkLTmESLIJMOGhAS&rating=g')
        .then(resp => resp.json())
        .then(data => {
             this.setState({
                 gifs: data.data.map(gif => gif.images.original.url).slice(0,3)
             })
        })
    }


    searchGifs = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=UQmRuHtG63PBD5rrDkLTmESLIJMOGhAS&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifs: data.data.map(gif => gif.images.original.url).slice(0,3)
            })
        })
    }





    render() {
        return (
            <div>
               <GifSearch searchGifs={this.searchGifs} />
               <GifList gifs={this.state.gifs}/> 
            </div>
        )
    }
}
