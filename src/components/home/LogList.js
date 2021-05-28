import React from 'react'
import ListItem from './ListItem'
import { List } from 'antd'

function purchaseList({ purchaseListItems, setPurchaseListItems, loading, setLoading }) {
  return (
    <List 
      size='large'
      loading={loading}
      bordered
      dataSource={purchaseListItems}
      renderItem={item =>
        <ListItem
          setPurchaseListItems={setPurchaseListItems}
          setLoading={setLoading}
          item={item} />}
    />
  )
}

export default purchaseList