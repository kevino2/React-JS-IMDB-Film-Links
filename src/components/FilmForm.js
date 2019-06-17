import React, {Component} from 'react';
class FilmForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',
      url:''
    }
    this.handleFilmChange = this.handleFilmChange.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFilmChange(event){
    this.setState({name: event.target.value})
  }

  handleURLChange(event) {
    this.setState({url: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.name.trim() || !this.state.url.trim()) {
      return;
    }
    this.props.onFilmSubmit(this.state); //passed prop
    this.setState({name: '', url:''});
  }


  render(){

    return(
      <form onSubmit={this.handleSubmit}>

        <input type="text"
        placeholder ="Film title"
        value={this.state.name}
        onChange={this.handleNameChange}/>

        <input type="text"
        placeholder="imdb URL"
        onChange={this.handleURLChange}/>
        <input type="submit" value="Add Film"/>

      </form>
    )
  }
}
