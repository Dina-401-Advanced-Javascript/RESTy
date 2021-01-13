import React from 'react';
import './form.scss';

class Form extends React.Component{
    constructor(properties){
    super(properties);
    this.state = {
      method: 'GET',
      url: ''
    }
  }

  handleClick = async (event) => {
    event.preventDefault();
    console.log('HERE');
    var headers = [];
    console.log('method',this.state.method);
    console.log('url',this.state.url);
    //call the API the user provided
    const api = await fetch(this.state.url, {method: this.state.method, mode: 'cors'})
      .then(res => {
        console.log('res status',res.status);
        if (res.status !== 200) return;
        
        //to get the headers, we have to iterate through them using headers.entries()
        for (var pair of res.headers.entries()) { // accessing the entries
          var obj = {};
          obj[pair[0]] = pair[1];
          headers.push(obj);
        }     
        return res.json();
      });
    console.log('COUNT');
    this.props.getResults(api.length,headers, api);    
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
        <input type='text' id='url' data-testid="url" placeholder="Enter URL" onChange={this.handleChange}/> 
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
      </>
    )
  }
}
export default Form;