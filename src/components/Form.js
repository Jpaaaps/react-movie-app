import React, { useState } from 'react';
import axios from "axios";

class Form extends React.Component {
    state = {
		title: '',
		poster: '',
		comment:''
    }

    submitForm = (e) => {
        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state)
            .then(res => res.data)
			.then(res => {
                alert(`You added your movie ${this.state.title}`)
            })
			.catch(e => {
				console.error(e);
				alert(`Error loading movie : ${e.message}`);
			});
	  }
    
    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value});
	}
    
    render() {
        return (
            <div>
                <h1>Present your favorite movie !</h1>
                <form onSubmit={this.submitForm}>
					<fieldset>
						<input 
							name="title" 
							value={this.state.title} 
							type="text" 
							onChange={this.handleChange} 
							placeholder="Enter movie name"/>
						<input 
							name="poster" 
							value={this.state.poster} 
							type="url" 
							onChange={this.handleChange}
							placeholder="Enter movie url"/>
						<textarea 
							name="comment" 
							value={this.state.comment} 
							type="text" 
							onChange={this.handleChange}
							placeholder="Add your Comment"/>
						<input 
							className="button" 
							type="submit" 
							value="Envoyer" />
					</fieldset>
                </form>
            </div>	
            )
        }
}  

export default Form
