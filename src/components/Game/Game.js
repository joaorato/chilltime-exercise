import React from "react";
import "./Game.css";
import Card from "../Card/Card";
import table from "../../data/table.json";
import LeaderBoard from "../LeaderBoard/LeaderBoard";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      cardArray: [],
      clickCounter: 0,
      tries: 0,
      timeElapsed: 0
    };
    this.state = this.initialState;
    //function needs to be bound to be used in child component (Card.js)
    this.clickCard = this.clickCard.bind(this);
    this.tick = this.tick.bind(this);
    this.playerName = "Player Name"
  }

  tick() {
    this.setState({timeElapsed: this.state.timeElapsed + 1});
  }

  componentDidMount(){
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillMount() {
    console.log("DEBUG: componentWillMount");
    this.generateCardArray();
    this.shuffleFunction();
    clearInterval(this.interval)
  }

  generateCardArray() {
    console.log("DEBUG: -> generateCardArray");
    var _cardArray = this.state.cardArray;
    for (var i = 0; i < table.length; i++) {
      _cardArray[i] = {
        cardType: table[i].cardType,
        cardState: table[i].cardState
      };
    }
    this.setState({ cardArray: _cardArray });
  }

  shuffleFunction() {
    console.log("DEBUG: -> shuffleFunction");
    var _cardArray = this.state.cardArray;
    _cardArray.sort(() => Math.random() - 0.5);
    this.setState({ cardArray: _cardArray });
  }

  clickCard(_position) {
    var _cardArray = this.state.cardArray;
    console.log("Clicked:" + _position);
    console.log(_cardArray[_position]);
    if (_cardArray[_position].cardState === "INVISIBLE") {
      _cardArray[_position].cardState = "VISIBLE";
    }
    else {
     return;
    }
    this.setState({ cardArray: _cardArray });
    if(this.state.clickCounter === 0){
      this.setState({ clickCounter: 1 });
    }
    else if(this.state.clickCounter === 1){
      this.setState({clickCounter: 2});
      this.checkType(_position);
    }
    else if(this.state.clickCounter === 2){
      this.setState({clickCounter: 3});
      this.checkType(_position);
    }
  }

  checkType(_position){
    var _cardArray = this.state.cardArray;
    var _visibleCards = [];
    var j = 0;
    for (var i = 0; i < table.length; i++) {
      if(_cardArray[i].cardState === "VISIBLE"){
        if(typeof _visibleCards[0] === "undefined"){
          _visibleCards[j] = _cardArray[i];
          j++;
        }
        else if(_cardArray[i].cardType === _visibleCards[0].cardType){
          console.log("THE CARDS MATCH!");
          _visibleCards[j] = _cardArray[i];
          j++;
          if (j === 3){
            console.log("YOU SOLVED A TRIO!");
            this.setState({
              clickCounter: 0,
              tries: this.state.tries + 1});
            _visibleCards[0].cardState = "RESOLVED";
            _visibleCards[1].cardState = "RESOLVED";
            _visibleCards[2].cardState = "RESOLVED";
            _visibleCards = [];
          }
        }
        else{
          console.log("THE CARDS DON'T MATCH!");
          this.setState({
            clickCounter: 0,
            tries: this.state.tries + 1});
          for (var k = 0; k < _visibleCards.length ; k++) {
            _visibleCards[k].cardState = "INVISIBLE";
          }
          _visibleCards = [];
          for ( var l = 0; l < table.length; l++)
            if(_cardArray[l].cardState === "VISIBLE")
              _cardArray[l].cardState = "INVISIBLE";
          //_cardArray[_position].cardState = "FAILED";
        }
      }
    }
  }

  treatFailed(){
    var _cardArray = this.state.cardArray;
    for ( var i = 0; i < table.length; i++){
      if(_cardArray[i].cardState === "FAILED"){
        _cardArray[i].cardState = "INVISIBLE";
      }
    }
  }

  renderCardTable() {
    return this.state.cardArray.map((card, index) => {
      const { cardType, cardState } = card;
        return (
          <Card
            key={index}
            cardType={cardType}
            cardState={cardState}
            onClick={() => this.clickCard(index)}
          />
        );
    });
  }

  renderScoreBoard(){
    return (
      <>
        <div>{this.playerName}</div>
        <div>Tries: {this.state.tries}</div>
        <div>Time Elapsed: {this.state.timeElapsed} s</div>
      </>
      );
  }

  checkGameOver(){
    var count = 0;
    for (var i = 0; i < table.length; i++) {
      if(this.state.cardArray[i].cardState === "RESOLVED"){
        count++;
      }
    }
    if (count >= 27){
      return true;
    }
    else{
      return false;
    }
  }

  reset(e){
    e.preventDefault();
    this.setState(this.initialState);
    this.generateCardArray();
    this.shuffleFunction();
    clearInterval(this.interval)
  }

  saveScoreToLeaderboard(){
    return (
      <LeaderBoard
        playerName={this.state.playerName}
        tries={this.state.tries}
        timeElapsed={this.state.timeElapsed}
        totalScore={this.state.tries*5 + this.state.timeElapsed}
      />
      );    
  }

  render() {
    console.log(this.state.cardArray);
    if(this.checkGameOver()){
      clearInterval(this.interval);
      this.saveScoreToLeaderboard();
      return (
        <>
          <div className="Score-board">{this.renderScoreBoard()}</div>
          <div className="Table-wrapper">Congratulations! Final Score: {this.state.tries*5 + this.state.timeElapsed}</div>
          <button type="button" onClick={this.reset.bind(this)}>Play Again!</button>
        </>
        );  
    }
    return (
      <>
        <div className="Score-board">{this.renderScoreBoard()}</div>
        <div className="Table-wrapper">{this.renderCardTable()}</div>
      </>
      );
  }
}

export default Game;
