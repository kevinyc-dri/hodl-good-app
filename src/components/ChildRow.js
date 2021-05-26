import React, { useState, useEffect } from 'react'
import { Form, Row, Col } from 'react-bootstrap'

function ChildRow({ addRow }) {
  const [newDate, setNewDate] = useState()
  const [newQuantity, setNewQuantity] = useState()
  const [newPrice, setNewPrice] = useState()
  const [calc, setCalc] = useState()

  const row = {
    date: newDate,
    quantity: newQuantity,
    price: newPrice,
  }

  useEffect(() => {
    setCalc(newPrice * newQuantity)
  }, [newQuantity, newPrice])

  return (
    <>
      <Row>
        <Col>
          <Form.Control onChange={(e) => setNewDate(e.target.value)} type="date" placeholder="Date" />
        </Col>
        <Col>
          <Form.Control onChange={(e) => setNewQuantity(e.target.value)} placeholder="Total" />
        </Col>
        <Col>
          <Form.Control onChange={(e) => setNewPrice(e.target.value)} placeholder="Price" />
        </Col>
        <Col>
          <p>{calc}</p>
        </Col>
        <Col>
          {/* <button onClick={e => (addRow(row), e.preventDefault())}>+</button> */}
          {/* <button className="btn-add" onClick={addNewRow}>+Add</button> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control onChange={(e) => setNewDate(e.target.value)} type="date" placeholder="Date" />
        </Col>
        <Col>
          <Form.Control onChange={(e) => setNewQuantity(e.target.value)} placeholder="Total" />
        </Col>
        <Col>
          <Form.Control onChange={(e) => setNewPrice(e.target.value)} placeholder="Price" />
        </Col>
        <Col>
          <p>{calc}</p>
        </Col>
        <Col>
          {/* <button onClick={e => (addRow(row), e.preventDefault())}>+</button> */}
        </Col>
      </Row>
    </>
  )
}

export default ChildRow