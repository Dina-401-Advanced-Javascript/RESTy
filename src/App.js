import React from 'react';
import Header from './header';
import Footer from './footer';
import Form from './form';
import Results from './results';
import History from './history';
import './app.scss';

//this tells us it is a react component
class App extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      history: [],
      count: 0,
      headers: {},
      results: []
    }
  }

  getResults = (count,headers,results, history) => {
    this.setState({
      count,
      headers,
      results,
      history
    });
    console.log('STATE = ', this.state);
  }

  render() {
    console.log(this.state.history);
    return (
      <>
        <Header />
        <div id="container">
          <div id="history">
            <h3>History</h3>
            <History 
              history = {this.state.history}/>
          </div>
          <div id="content">
            <Form 
              getResults = {this.getResults}
            />
            <Results
              count = {this.state.count}
              headers = {this.state.headers}
              results = {this.state.results}
            />
          </div>
        </div>
        <div id="footer">
          <Footer/>
        </div>
      </>     
    )
  }
}


export default App;