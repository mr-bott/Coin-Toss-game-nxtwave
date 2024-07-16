// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    total: 0,
    result: 0,
  }
  random = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({result: tossResult})
    if (tossResult) {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    } else {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    }
    this.setState(prevState => ({total: prevState.total + 1}))
  }
  render() {
    const {heads, tails, total, result} = this.state
    return (
      <div className="main">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {result ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="img"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="img"
              alt="toss result"
            />
          )}
          <button onClick={this.random} className="btn">
            Toss Coin
          </button>
          <div className="card-t">
            <p className="pp">Total: {total}</p>
            <p className="pp">Heads: {heads}</p>
            <p className="pp">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
