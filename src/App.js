import React, { useState, createContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from 'firebase'
import { Layout } from 'antd'
import NavBar from './components/common/NavBar'
import Home from './scenes/Home'
import Login from './scenes/Login'
import Signup from './scenes/Signup'
import { firebaseConfig } from './config'
import './App.css'
const { Content, Footer} = Layout

firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth()

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
  return (
  <UserContext.Provider value={{ user, setUser, firebaseAuth }}>
      <Router>
        <Layout className="layout">
          <NavBar />
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup}/>
                <Route path="/" component={Home} />
              </Switch>
              {/* <Home/> */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            &copy; Created by Kevin Choi @Boca Code
          </Footer>
        </Layout>
      </Router>
    </UserContext.Provider>
  )
}

export default App
