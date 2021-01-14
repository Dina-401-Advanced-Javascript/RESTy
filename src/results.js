import React from 'react';
import ReactJson from 'react-json-view';
import './result.scss';

class Results extends React.Component{
  render(){
    return(
      <div id="results" className={this.props.results.length || this.props.headers.length?"show":"hide"}>
        <div className="content" ><h3>Count of results: <span  data-testid="count">{this.props.count}</span></h3></div>
        <div className="content"><h3>Headers</h3></div>
        <div className="content" data-testid="headers" ><ReactJson src={this.props.headers} /></div>
        <div className="content"><h3>Body</h3></div>
        <div className="content" data-testid="results"><ReactJson src={this.props.results} /></div>
      </div>
    )
  }
}

export default Results;