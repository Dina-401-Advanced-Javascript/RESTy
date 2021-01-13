import React from 'react';
import Header from './header';
import Footer from './footer';
import Form from './form';
import Results from './results';

import './app.scss';

//this tells us it is a react component
class App extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      headers: {},
      results: []
    }
  }

  getResults = (count,headers,results) => {
    console.log('count',count);
    this.setState({
      count,
      headers,
      results
    });
    console.log('state',this.state);
  }

  render() {
    return (
      <>
      <Header />
      <Form 
        getResults = {this.getResults}
      />
      <Results 
        count = {this.state.count}
        headers = {this.state.headers}
        results = {this.state.results}
      />
      <Footer />
      </>
    )
  }
}


export default App;