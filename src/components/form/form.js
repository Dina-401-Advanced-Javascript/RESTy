import React from 'react';
import './form.scss';

class Form extends React.Component{
    constructor(properties){
    super(properties);
    this.state = {
      history: [],
      method: this.props.method,
      url: this.props.url,
      body: this.props.body    
    }
  }

  handleClick = async (event) => {
    event.preventDefault();
    this.props.loading(true);
    var headers = [];
    //call the API the user provided
    var options = {
        method: this.state.method, 
        //mode: 'cors'
      };
    if (this.state.method !== 'GET'  && this.state.method !== 'DELETE') {
      options.body = this.state.body;
      options.headers = { "content-type": "application/json; charset=UTF-8" };
    }
    const proxyurl = "https://dina-cors-anywhere.herokuapp.com/";
    try{
      const res = await fetch(proxyurl + this.state.url, options);
      if (res.status !== 200) throw new Error('Error with status code: ' + res.status);
      //to get the headers, we have to iterate through them using headers.entries()
      for (var pair of res.headers.entries()) { // accessing the entries
        var obj = {};
        obj[pair[0]] = pair[1];
        headers.push(obj);
      }     
  
      const data = await res.json();
      //update the history with the url, method and body we just ran.
      //todo - check for uniqueness
      this.setState({history: [...this.state.history, { method: this.state.method, url: this.state.url, body: this.state.body}]});

      //call the parent App with the data we retrieved so it can send it to the results component
      this.props.getResults(data?data.length:0,headers,data, this.state.history);    
    }
    catch(error){
      this.props.loading(false);
      console.log(error);
    }
  }

  handleURLChange = event => {
    event.preventDefault();
    this.setState({url : event.target.value});
  }
  
  handleBodyChange = event => {
    this.setState({body : JSON.parse(event.target.value)});
  }

  handleRadioButtons = event => {
    this.setState({method: event.target.value});
  }

  render(){
    console.log('props',this.props.method, this.props.url, this.props.body);
    return(
      <div id="form">
        <input type='text' id='url' data-testid="url" placeholder="Enter URL" onChange={this.handleURLChange} value={this.state.url}/> 
        <br/>
        <textarea id='body' data-testid="body" placeholder="Enter request body in json format" onChange={this.handleBodyChange} value={JSON.stringify(this.state.body)}/> 
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