import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../App'
import Head from '../components/home/Head'
import LogList from '../components/home/LogList'


function Home() {
  const [logListItems, setLogListItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useContext(UserContext)
  useEffect(() => {
    if(user){
      setLoading(true)
      fetch(``)
    }
  })
  return (
    <>
      <Head setLogListItems={setLogListItems} setLoading={setLoading} />
      <LogList
        logListItems={logListItems}
        setLogListItems={setLogListItems}
        loading={loading}
        setLoading={setLoading} />
    </>
    
  )
}

export default Home