import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/TItle';
import Card from './components/Card/Card'
import cards from "./cards.json";
import './App.css';


class App extends Component {
  state = {
    cards,
    selectedCards: [],
    score: 0,
    highestScore: 0
  }

  selectedCard = id => {
    console.log(id);
  }

  render() {
    return (
      <>
        <NavBar>Clicky Memory Game</NavBar>
        <Title>
          <h1 className="display-4">Clicky Memory Game!</h1>
          <p className="lead">Click on an image to earn points, but don't click on a any more than once!</p>
        </Title>
        {this.state.cards.map(friend => (
          <Card
            key={friend.id}
            id={friend.id}
            image={friend.image}
            clicked={this.selectedCard}
          />
        ))}
      </>
    );
  }
}

export default App;
