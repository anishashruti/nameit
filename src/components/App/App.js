import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import Results from '../Results/Results';
import './App.css'
const name = require('@rstacruz/startup-name-generator');

class App extends React.Component{
  state = {
    headertext: "This is my first app",
    headerExp: true,
    suggested:[],
  };

  handleInputChange = (inputText) => {
    
    this.setState({ headerExp: !inputText ,
      suggested: inputText ? name(inputText) : []
    });

  }
  render() {
    return (
      <div>
        <Header headerExp={this.state.headerExp} />
        <SearchBox handleInputChange={ this.handleInputChange}/>
        <Results suggested={this.state.suggested }/>
      </div>
    );

  }
}

export default App;