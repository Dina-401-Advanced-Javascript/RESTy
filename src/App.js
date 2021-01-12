import React from 'react';
import Header from './header';
import Footer from './footer';
import './app.scss';

//this tells us it is a react component
class App extends React.Component  {
  constructor(properties){
    super(properties);
    this.state = {
      method: '',
      url: '',
      inputMethod: '', 
      inputURL: ''
    }
  }

  handleClick = event => {
    event.preventDefault();
    this.setState({ url: this.state.inputURL });
    this.setState({ method: this.state.inputMethod });
  }

  handleChange = event => {
    this.setState({inputURL : event.target.value});
  }
  
  handleRadioButtons = event => {
    this.setState({inputMethod: event.target.value});
  }

  render() {
    return (
      <>
      <Header />
      <input type='text' id='url' placeholder="Enter URL" onChange={this.handleChange}/> 
      <br/>
      <div id='radioButtons'>
        <label class="labels">
          <input type="radio" class="radioButtons" name="get" value="GET" onClick = {this.handleRadioButtons}/>
          GET
        </label>
        <label class="labels">
          <input type="radio" id="post" class="radioButtons" value="POST" onClick = {this.handleRadioButtons}/>
          POST
        </label>
        <label class="labels">
          <input type="radio" id="put" class="radioButtons"value="PUT" onClick = {this.handleRadioButtons}/>
          PUT
        </label>
        <label class="labels">
          <input type="radio" id="delete" class="radioButtons" value="DELETE" onClick = {this.handleRadioButtons}/>
          DELETE
        </label>
      </div>
      <button onClick={this.handleClick}>Go</button>
      <div id = 'requestInfo'>
        <span id='methodDiv'>{this.state.method}</span>&nbsp;&nbsp;
        <span id = 'urlDiv'>{this.state.url}</span>
      </div>
      <div id="emptyDiv">&nbsp;</div>
      <Footer />
      </>
    )
  }
}


export default App;
