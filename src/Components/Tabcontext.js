import React from 'react'

const TabContext = React.createContext({
  active: '1',
  changeTab: () => {},
})

export default TabContext;