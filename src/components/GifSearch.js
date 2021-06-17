import React, { Component } from 'react'

export default class GifSearch extends Component {


    state = {
        searchInput: ''
    }

    handleChange = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        this.props.searchGifs(this.state.searchInput)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' placeholder='search...'></input>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}
