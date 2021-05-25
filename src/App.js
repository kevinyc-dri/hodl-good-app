import './App.css'
import diamond from '../src/images/diamond.png'
import React from 'react'
import {Modal, Card, Navbar} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [isOpen, setIsOpen] = React.useState(false)

  const showModal = () => {
    setIsOpen(true);
  }

  const hideModal = () => {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <nav>
        <div class="nav-wrapper header">
          <img
            src={diamond}
            width="50"
            height="50"
          />
          <a href="#" class="brand-logo">HODLGOOD</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="collapsible.html">Login</a></li>
          </ul>
          <div class="livecoinwatch-widget-5"
            lcw-base="USD"
            lcw-color-tx="#fcb900"
            lcw-marquee-1="coins"
            lcw-marquee-2="none"
            lcw-marquee-items="10"
          >
          </div>
        </div>
      </nav>
      <header className="App-header">
        <Card className="card" style={{ width: '18rem' }} onClick={showModal}>
          <Card.Body>
            <Card.Title>Add a Coin</Card.Title>
            <Card.Subtitle>Quantity</Card.Subtitle>
            <Card.Subtitle>Price</Card.Subtitle>
          </Card.Body>
        </Card>
        <Modal className="modal" show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Coin Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea
              className="modal-text-area"
              rows="6"
              cols="91"
              placeholder="Date">
            </textarea>
          </Modal.Body>
          <Modal.Body>
            <textarea
              className="modal-text-area"
              rows="6"
              cols="91"
              placeholder="Quantity">
            </textarea>
            </Modal.Body>
          <Modal.Body>
            <textarea
              className="modal-text-area"
              rows="6"
              cols="91"
              placeholder="Price">
            </textarea>
            </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
            <button className="save-button">Save</button>
          </Modal.Footer>
        </Modal>
      </header>
      <footer className="footer">
        <p>&copy; Created by Kevin Choi @Boca Code</p>
      </footer>
    </div>

  );
}


export default App;
