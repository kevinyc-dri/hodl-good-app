import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import NavBar from './components/common/NavBar'
import './App.css'
const { Content, Footer} = Layout

function App() {
  return (
    <Router>
      <Layout className="layout">
        <NavBar />
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Switch>
              <Route path="/login" />
              <Route path="/signup" />
              <Route path="/" />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', color: 'white'}}>
          &copy; Created by Kevin Choi @Boca Code
        </Footer>
      </Layout>
    </Router>
  )
}

export default App
