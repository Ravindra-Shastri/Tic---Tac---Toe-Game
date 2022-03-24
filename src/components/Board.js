import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [],
      xIsNext: true,
    }
  }
  handleClick = (i) => {
    const squares = this.state.squares.slice();
    if (this.props.calculateWinner(squares) || squares[i]) {
      return (alert(`Game is finished!`))
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare = (i) => {
    return (<Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
    );
  }

  resetGame = () => {
      this.setState({ squares: [] })
  }

  render() {
    const winner = this.props.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = '🎇Winner🎇 : ' + winner;
    } else {
      status = '🚀Next player 👨: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <span className="reset-btn" onClick={() => this.resetGame()}>🔄</span>
        <div className={status.includes("Winner") ? "winner status" : "status"}>{status}</div>
        <div className="board-box">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-box">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-box">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
      // <button> Reset </button>
    );
  }
}