import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form';
import Results from '../results/results';
import History from '../history/history';
import { Route, Switch } from 'react-router-dom';
import DetailedHistory from '../history/detailed-history';
import Help from '../help/help';
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
      method: 'GET',
      url: '',
      body: {}
    }
  }

  loading = (bool) =>{
    this.setState({loading:bool});
  }

  //when the history component tells you what index the user clicked on,
  //update these 3 fields 
  setInputFields = (index) => {
    
    this.setState({
      url: this.state.history[index].url,
      method: this.state.history[index].method,
      body: this.state.history[index].body
    });
  }
  // setInputFields = (method, url, body) => {
  //   this.setState({
  //     inputFields: 
  //       { url, method, body}
  //     }
  //   );
  //   console.log('input fields = ', this.state.inputFields);
  // }

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
        <Switch>
          <Route exact path="/">
            <div id="container">
              <div id="history">
                <History 
                  setInputFields = {this.setInputFields}
                  history = {this.state.history}/>
              </div>
              <div id="content">
                <Form 
                  method = {this.state.method}
                  url = {this.state.url}
                  body = {this.state.body}
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
          </Route>
          <Route path="/history">
            <DetailedHistory 
              setInputFields = {this.setInputFields}
              history = {this.state.history}/>
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route>
            <div>404</div>
          </Route>
        </Switch>
        <Footer/>
      </>     
    );
  }
}


export default App;