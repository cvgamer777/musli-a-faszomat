import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default class App extends React.Component {
  state = {
    musliData : null

  }
  
  render() {
    return (
      <div className='page-container'>
        <nav id="navbar" title="Toggle menu width">
          <div className="menu-item" tabIndex="0" data-content="products">
            <span className="menu-icon">📦</span>
            <span className="menu-text">Products</span>
          </div>

          <div className="menu-item" tabIndex="0" data-content="prices">
            <span className="menu-icon">💰</span>
            <span className="menu-text">Prices</span>
          </div>

          <div className="menu-item" tabIndex="0" data-content="about">
            <span className="menu-icon">ℹ️</span>
            <span className="menu-text">About</span>
          </div>
        </nav>


        <main id="content-area">
          <h1>My mueslis</h1>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.musliData}
            </tbody>
          </table>
        </main>
      </div>
    )
  }
  async componentDidMount() {
    try {
      let musliData = await fetch('http://localhost:3333/muslis')
      console.log('musliData', musliData) 
      musliData = await musliData.json()
      console.log('musliData',musliData)
    }
    catch(e) {
      console.warn(e)
    }

  }
}