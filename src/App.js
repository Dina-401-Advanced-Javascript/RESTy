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
      results: [],
      loading: false,
      inputFields: {}
    }
  }

  loading = (bool) =>{
    this.setState({loading:bool});
  }

  setInputFields = (object) => {
    this.setState({
      inputFields: 
        { 
          url: object.url, 
          method: object.method, 
          body: object.body
        }
      }
    );
  }

  getResults = (count,headers,results, history) => {
    this.setState({
      count,
      headers,
      results,
      history,
      loading: false
    });
  }

  render() {
    return (
      <>
        <Header />
        <div id="container">
          <div id="history">
            <h3>History</h3>
            <History 
              setInputFields = {this.setInputFields}
              history = {this.state.history}/>
          </div>
          <div id="content">
            <Form 
              inputFields = {this.state.inputFields}
              loading = {this.loading}
              getResults = {this.getResults}
            />
            <Results
              count = {this.state.count}
              headers = {this.state.headers}
              results = {this.state.results}
              loading = {this.state.loading}
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