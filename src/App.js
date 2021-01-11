import React from 'react';
import Header from './header';
import Footer from './footer';
import './app.scss';

//this tells us it is a react component
class App extends React.Component  {
  constructor(properties){
    super(properties);
    this.state = {
      method: 'GET',
      url: 'http://localhost'
    }
  }
  handleClick = event => {
    event.preventDefault();
    let newWords = this.state.words.split('').reverse().join('');
    this.setState({ words: newWords})
    //might also be able to do it like this in some cases?
    //this.state.words = newWords;
  }

  render() {
    return (
      <>
      <Header />

      <p> React is the best language ever</p>
      <input type='text' id='url'/>
      <button onClick={this.handleClick}>Click Me</button>
      <Footer />
      </>
    )
  }
}


export default App;
