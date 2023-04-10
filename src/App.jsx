import React, { Component } from 'react';
import NewPersonalCard from './components/NewPersonalCard';

export class App extends Component {
  render() {
    return (
      <div>
        <NewPersonalCard
          firstName='Jane'
          lastName='Doe'
          age={45}
          hairColor='Black'
        />
        <NewPersonalCard
          firstName='John'
          lastName='Smith'
          age={88}
          hairColor='Brown'
        />
        <NewPersonalCard
          firstName='Millard'
          lastName='Fillmore'
          age={50}
          hairColor='Brown'
        />
        <NewPersonalCard
          firstName='Maria'
          lastName='Smith'
          age={62}
          hairColor='Brown'
        />
      </div>
    )
  }
}

export default App;