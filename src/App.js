import './App.css'
import diamond from '../src/images/diamond.png'
import ParentModal from './components/ParentModal'
import Footer from './components/Footer'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <nav>
        <div class="nav-wrapper header">
          <img
            class="image-logo"
            alt="diamond-logo"
            src={diamond}
            width="50"
            height="50"
          />
          <a href="#" class="brand-logo">HODLGOOD</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="collapsible.html">Login</a></li>
          </ul>
          <div class="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#fcb900" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="20" ></div>
        </div>
      </nav>
      <header className="App-header">
        <ParentModal />
      </header>
        <Footer />
    </div>
  )
}


export default App
