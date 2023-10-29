import React from 'react'
import styles from '../Header.module.css'
import Names from './Names'
import Rights from './Rights'
import Text from './Text'

const Home = () => {
  return (
    <div>
        <Rights/>
        {/* <Names/> */}
        <Text/>
    </div>
  )
}

export default Home