import React from 'react'
import Welcome from '@/app/components/Welcome'
import Main from '@/app/components'

const App = () => {
  return (
    <>
      <Welcome />
      <Main />
    </>
  )
}

export default React.memo(App)
