import React from 'react';
import './history.scss';

class History extends React.Component{

  handleClick(idx){
    console.log('IONDEX = ',idx);
    this.props.setInputFields(idx);

  }

  render(){
    return(
      <>
      <h3>History</h3>
      <ul>
        {this.props.history.length ? this.props.history.map((entry, idx) => (
          <li key={idx} onClick=
            { () => this.handleClick(idx)}>
            <div><b>method:</b> {entry.method}<br/>
            <b>url:</b> {entry.url}</div>
            <hr></hr>
          </li>
        ))
        : 
        ''}
      </ul>
      </>
    );
  }
}

export default History;