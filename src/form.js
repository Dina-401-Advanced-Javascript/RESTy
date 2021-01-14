import React from 'react';
import './form.scss';

class Form extends React.Component{
    constructor(properties){
    super(properties);
    this.state = {
      history: [],
      method: 'GET',
      url: '',
      body: {}
    }
  }

  handleClick = async (event) => {
    event.preventDefault();
    var headers = [];
    //call the API the user provided
    var options;
    if (this.state.method === 'GET' || this.state.method === 'DELETE') {
      options = {method: this.state.method, mode: 'cors'}
    } else {
      options = {method: this.state.method, body: JSON.stringify(this.state.body), mode: 'cors'}
    }

    const proxyurl = "https://dina-cors-anywhere.herokuapp.com/";
    try{
      const api = await fetch(proxyurl + this.state.url, options)
        .then(res => {
          if (res.status !== 200) return;
          
          //to get the headers, we have to iterate through them using headers.entries()
          for (var pair of res.headers.entries()) { // accessing the entries
            var obj = {};
            obj[pair[0]] = pair[1];
            headers.push(obj);
          }     
          return res.json();
        });
      this.setState({history: [...this.state.history, { method: this.state.method, url: this.state.url, body: this.state.body}]});
      this.props.getResults(api?api.length:0,headers, api, this.state.history);    
    }
    catch(error){
      console.log(error);
    }
    
    
  }

  handleURLChange = event => {
    this.setState({url : event.target.value});
  }
  
  handleBodyChange = event => {
    this.setState({body : JSON.parse(event.target.value)});
  }

  handleRadioButtons = event => {
    this.setState({method: event.target.value});
  }

  render(){
    return(
      <div id="form">
        <input type='text' id='url' data-testid="url" placeholder="Enter URL" onChange={this.handleURLChange}/> 
        <br/>
        <textarea id='body' data-testid="body" placeholder="Enter request body in json format" onChange={this.handleBodyChange}/> 
        <br/>
        <div id='radioButtons' data-testid="method">
          <label className ="labels">
            <input type="radio" defaultChecked className ="radioButtons" name="radioButton" value="GET" onClick = {this.handleRadioButtons}/>
            GET
          </label>
          <label className ="labels">
            <input type="radio" className ="radioButtons" name="radioButton" value="POST" onClick = {this.handleRadioButtons}/>
            POST
          </label>
          <label className ="labels">
            <input type="radio" className ="radioButton" name="radioButton" value="PUT" onClick = {this.handleRadioButtons}/>
            PUT
          </label>
          <label className ="labels">
            <input type="radio" className ="radioButton" name="radioButton" value="DELETE" onClick = {this.handleRadioButtons}/>
            DELETE
          </label>
        </div>
        <button data-testid = "submit-button" onClick={this.handleClick}>Go</button>
      </div>
    )
  }
}
export default Form;