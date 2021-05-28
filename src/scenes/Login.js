import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom"
import firebase from 'firebase'
import { UserContext } from '../App'
import { Form, Input, Button, Typography } from 'antd'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

const Login = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { setUser } = useContext(UserContext)
  let history = useHistory()
  const onFinish = ({ email, password }) => {
    setLoading(true)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        setError(null)
        setUser(res.user)
        setLoading(false)
        localStorage.setItem('user', JSON.stringify(res.user))
        history.push("/")
      })
      .catch(err => {
        setLoading(false)
        setError(err.message)
      })
  }

  const loginWithGoogle = () => {
    setLoading(true)
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(res => {
        setError(null)
        setUser(res.user)
        setLoading(false)
        localStorage.setItem('user', JSON.stringify(res.user))
        history.push("/")
      })
      .catch(err => {
        setLoading(false)
        setError(err.message)
      })
  }

  const onFinishedFailed = (errorInfo) => {
    setLoading(false)
    console.log('Failed:', errorInfo)
    setError('Please enter valid email and password')
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishedFailed={onFinishedFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please enter your email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter your password',
          }
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        {error &&
          <>
            <Typography.Text type="danger">{error}</Typography.Text>
            <br />
          </>}
        <Button type="primary" loading={loading} htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login