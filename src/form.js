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

  handleClick = async (event) => {
    event.preventDefault();
    var response;
    //call the API the user provided
    const api = await fetch(this.state.url, {method: this.state.method, mode: 'cors'})
      .then(res => {
        console.log(res);
        if (res.status !== 200) return;
        response = res;
        return res.json();
      });
    console.log('COUNT', api.length);
    console.log('HEADERS', response.headers);
    console.log('API' , api);
    this.props.getResults(api.length,response.headers, api);    
  }

  handleChange = event => {
    this.setState({url : event.target.value});
  }
  
  handleRadioButtons = event => {
    this.setState({method: event.target.value});
  }

  render(){
    return(
      <>
        <input type='text' id='url' placeholder="Enter URL" onChange={this.handleChange}/> 
        <br/>
        <div id='radioButtons'>
          <label class="labels">
            <input type="radio" selected class="radioButtons" name="radioButton" value="GET" onClick = {this.handleRadioButtons}/>
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
      </>
    )
  }
}
export default Form;