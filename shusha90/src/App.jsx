import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Component } from 'react'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Shusha</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}



class ButtonToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: null,
    };
  }

  handleButtonClick = (buttonNumber) => {
    this.setState({ activeButton: buttonNumber });
  };

  render() {
    return (
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <button
            key={i}
            onClick={() => this.handleButtonClick(i + 1)}
            className={this.state.activeButton === i + 1 ? 'active' : ''}
          >
            {this.state.activeButton === i + 1 ? 'Active' : i + 1}
          </button>
        )}
      </div>
    );
  }
}

export default ButtonToggle;



export default App
