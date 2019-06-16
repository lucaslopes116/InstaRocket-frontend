import React, { Component } from 'react';
import api from '../services/api'

import './New.css'
class New extends Component {
    state={
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: ''
    }

    handleSubmit = async event =>{
        event.preventDefault()

        const { author, place, description , hashtags, image } = this.state
        const { history } = this.props
        const data = new FormData()

        data.append('image', image)
        data.append('author', author)
        data.append('place', place)
        data.append('description', description)
        data.append('hashtags', hashtags)

        await api.post('posts', data)

       history.push('/')
    }

    handleImageChange = event =>{
        this.setState({ image: event.target.files[0]})
    }

    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value})
    }
    render() {
        const { author, place, description , hashtags } = this.state

        return (
         <form id="new-post" onSubmit={this.handleSubmit}>
             <input type="file" onChange={this.handleImageChange}/>
             <input type="text" name="author" placeholder="Autor do post" onChange={this.handleChange} value={author}/>
             <input type="text" name="place" placeholder="Local do post" onChange={this.handleChange} value={place}/>
             <input type="text" name="description" placeholder="Descrição do post" onChange={this.handleChange} value={description}/>
             <input type="text" name="hashtags" placeholder="Hastags do post" onChange={this.handleChange} value={hashtags}/>
             
             <button>Enviar</button>
         </form>
        );
    }
}

export default New;