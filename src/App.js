import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {isClockPresent: false}

  onClickClockButton = () => {
    this.setState(prevState => ({
      isClockPresent: !prevState.isClockPresent,
    }))
  }

  render() {
    const {isClockPresent} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onClickClockButton}
        >
          {isClockPresent ? 'Hide Clock' : 'Show Clock'}
        </button>
        {isClockPresent && <Clock date="15-8-21" />}
      </div>
    )
  }
}

export default App
