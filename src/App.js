import './App.css'
import diamond from '../src/images/diamond.png'
import React, { useState } from 'react'
import { Modal, Card, Form, Row, Col, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  const [isOpen, setIsOpen] = useState(false)

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
            class="image-logo"
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
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Date" />
              </Col>
              <Col>
                <Form.Control placeholder="Quantity" />
              </Col>
              <Col>
                <Form.Control placeholder="Price" />
              </Col>
            </Row>
          </Form>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Date" />
              </Col>
              <Col>
                <Form.Control placeholder="Quantity" />
              </Col>
              <Col>
                <Form.Control placeholder="Price" />
              </Col>
            </Row>
          </Form>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Date" />
              </Col>
              <Col>
                <Form.Control placeholder="Quantity" />
              </Col>
              <Col>
                <Form.Control placeholder="Price" />
              </Col>
            </Row>
          </Form>
          <Modal.Footer>
            <Button onClick={hideModal}>Cancel</Button>
            <Button className="save-button">Save</Button>
          </Modal.Footer>
        </Modal>
      </header>
      <footer className="footer">
        <p>&copy; Created by Kevin Choi @Boca Code</p>
      </footer>
    </div>
  )
}


export default App;
