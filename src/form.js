import React from 'react';
import './form.scss';

class Form extends React.Component{
    constructor(properties){
    super(properties);
    this.state = {
      method: '',
      url: ''
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

  render(){
    return(
      <>
        <input type='text' id='url' placeholder="Enter URL" onChange={this.handleChange}/> 
      <br/>
      <div id='radioButtons'>
        <label class="labels">
          <input type="radio" class="radioButtons" name="radioButton" value="GET" onClick = {this.handleRadioButtons}/>
          GET
        </label>
        <label class="labels">
          <input type="radio" class="radioButtons" name="radioButton" value="POST" onClick = {this.handleRadioButtons}/>
          POST
        </label>
        <label class="labels">
          <input type="radio" name="radioButton" class="radioButtons"value="PUT" onClick = {this.handleRadioButtons}/>
          PUT
        </label>
        <label class="labels">
          <input type="radio" name="radioButton" class="radioButtons" value="DELETE" onClick = {this.handleRadioButtons}/>
          DELETE
        </label>
      </div>
      <button onClick={this.handleClick}>Go</button>
      <div id = 'requestInfo'>
        <span id='methodDiv'>{this.state.method}</span>&nbsp;&nbsp;
        <span id = 'urlDiv'>{this.state.url}</span>
      </div>
      <div id="emptyDiv">&nbsp;</div>
      </>
    )
  }
}
export default Form;