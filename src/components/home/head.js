import React, { useState, useContext } from 'react'
import { Input, Avatar, Space, Form, Button } from 'antd'
import { UserContext } from '../../App'
const { Search } = Input

function Head({ setPurchaseListItems, setLoading }) {
  const { user } = useContext(UserContext)
  const [newPurchase, setNewPurchase] = useState(null)
  function addPurchase() {
    if (newPurchase && newPurchase.item && newPurchase.item.trim()) {
      setLoading(true)
      // TODO: Set below to YOUR todo-api
      fetch(`http://localhost:5000/purchase`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPurchase)
      })
        .then(res => res.json())
        .then(data => {
          setPurchaseListItems(data)
          setLoading(false)
        })
        .catch(e => {
          setLoading(false)
          console.log(e)
        })
    }
    setNewPurchase(null)
  }
  const greeting = (!user)
    ? 'Guest.' : user.displayName || 'User!'
  const userImage = (!user || !user.photoURL)
    ? null : <Avatar size={48} src={user.photoURL} />

  return (
    <>
      <header style={{ textAlign: 'center', paddingBottom: '40px' }}>
        <p>Welcome {greeting} {userImage}</p>
        {user && <Space direction="vertical">
          {/* <Search
            placeholder="New Todo Item"
            allowClear
            enterButton="ADD"
            size="large"
            value={newPurchase ? newPurchase.item : null}
            onChange={(e) => setNewPurchase({ item: e.target.value, userId: user.uid })}
            onSearch={addPurchase}
          /> */}
        </Space>}
      </header>
      <header>
        <h5>Add Purchase</h5>
        <Form 
          placeholder="Log Coin Purchase"
          allowClear
          enterButton="ADD"
          size="large"
          value={newPurchase ? newPurchase.item : null}
          onChange={(e) => setNewPurchase({ item: e.target.value, userId: user.uid })}
          onSearch={addPurchase}>
          <Form.Item
            label="Coin Name"
            name="coinname"
            rules={[
              {
                required: true,
                message: 'Please enter coin name',
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: 'Please enter date of purchase',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Quantity"
            name="quantity"
            rules={[
              {
                required: true,
                message: 'Please enter how many coins purchased',
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: 'Please enter at what price you got in at',
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
          <Button>Add</Button>
      </header>
    </>
  )

}

export default Head