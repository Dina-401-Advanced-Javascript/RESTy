import React from 'react';
import ReactJson from 'react-json-view';

class Results extends React.Component{
  render(){
    return(
      <div id="result" data-testid="results" >
        <h3>Count of results: {this.props.count} </h3>
        <h3>Headers</h3>
        <ReactJson src={this.props.headers} />
        <h3>Body</h3>
        <ReactJson src={this.props.results} />
        <div id="emptyDiv">&nbsp;</div>
      </div>
    )
  }
}

export default Results;