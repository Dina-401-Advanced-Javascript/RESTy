import React from 'react';
import './header.scss';

class History extends React.Component{

  handleClick(event){
    event.preventDefault();
    var obj = {};
    var array = event.target.innerText.split('\n');
    array.forEach(pair => {
      var keyValuePair = pair.split(': ');
      obj[keyValuePair[0]] = keyValuePair[1];
    })
    this.props.setInputFields(obj);
  }

  render(){
    return(
      <ul>
        {this.props.history.length ? this.props.history.map((entry, idx) => (
          <li key={idx} onClick={this.handleClick}>
            <div><b>method:</b> {entry.method}<br/>
            <b>url:</b> <a target="_blank" rel="noreferrer" href={entry.url}>{entry.url}</a></div>
            {entry.body.length? 
              <div>body: {JSON.stringify(entry.body)}</div>
            :''}
          </li>
        ))
        : 
        ''}
      </ul>
    );
  }
}

export default History;