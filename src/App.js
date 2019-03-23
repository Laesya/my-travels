import React, { Component } from 'react';
import './App.css';
import Travel from './Travel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Travel
          destination = 'Paris'
          country = 'France'
          img = 'https://www.acs-ami.com/fr/blog/wp-content/uploads/2015/07/inspiration-voyage.jpg'
          distance = '800km'
        />
        <Travel
          destination = 'Toulouse'
          country = 'France'
          img = 'https://www.toulouse-tourisme.com/sites/www.toulouse-tourisme.com/files/styles/incontournable_hp/public/thumbnails/image/incontournables_0.jpg?itok=hOLqvKSw'
          distance = '400km'
        />
      </div>
    );
  }
}

export default App;
