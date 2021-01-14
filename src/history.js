import React from 'react';
import './header.scss';

class History extends React.Component{

  render(){
    console.log('history',this.props.history);
    return(
      <ul>
        {this.props.history.length ? this.props.history.map((entry, idx) => (
          <li key={idx}>
            <div><b>method:</b> {entry.method}</div>
            <div><b>url:</b> <a target="_blank" rel="noreferrer" href={entry.url}>{entry.url}</a></div>
            {entry.body? 
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