import logo from './logo.svg'
import './App.css'
import PromoBar from './components/PromoBar/PromoBar.js'
import NavBar from './components/NavBar/NavBar.js'
import HeroSection from './components/HeroSection/HeroSection.js'

function App() {
  return (
    <div className="App">
      <div className='menu'>
        <PromoBar/>
        <NavBar/>
      </div>
      <div className='body'>
        <HeroSection/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App