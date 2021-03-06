import React, { Component } from 'react'
import Account from './components/Account'
import Trade from './components/Trade'
import TradeCTA from './components/Trade-CTA'
import './styles/App.css'

// This is the main App Component
// It loads all the child components need to display the page
class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='app-header'>
          <h1>Coin Trade</h1>
        </div>

        <div className='app-body'>
          <div className='section'>
            <Account/>
            <Trade/>
          </div>
          <TradeCTA/>
        </div>
      </div>
    )
  }
}

export default App
