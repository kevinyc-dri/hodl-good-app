import React, { useState } from 'react'
import { Modal, Card, Form, Button } from 'react-bootstrap'
import ChildRow from './ChildRow'

function ParentModal() {
  const [allRows, setAllRows] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const newRow = [{date:'date'}, {price: 20}, {quantity: 5}]

  const showModal = () => {
    setIsOpen(true)
  }

  const hideModal = () => {
    setIsOpen(false)
  }

  function addRow(row) {
    newRow.push(row)
    // return { newRow }
    console.log('row from parent', row)
  }

  // function addRow(row) {
  //   tableRowIndex = parseFloat(tableRowIndex) + 1
  //   let updatedRows = [...tableRows]
  //   updatedRows[tableRowIndex] = { index: tableRowIndex, quantity: "", price: "" }
  //   setRows(updatedRows)
  // }

  // console.log('all rows in parent component', allRows)
  return (
    <>
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
          <ChildRow addRow={addRow} />
        </Form>
        <Modal.Footer>
          <Button onClick={hideModal}>Cancel</Button>
          <Button className="save-button">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ParentModal