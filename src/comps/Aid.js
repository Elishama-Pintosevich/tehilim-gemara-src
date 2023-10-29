import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Names.module.css'
import DivAid from './DivAid'
import axios from 'axios'

const Aid = () => {
    const [count, setCount] = useState(0)
  useEffect(()=>{
     getData()
  },[])
  const getData = async()=>{
    try {
        const {data} = await axios.get(`https://good-action.cyclic.app/aids/count`)
        console.log(data);
        setCount(data.count)
    } catch (error) {
        console.log(error);
    }
    

}
  return (
    <div>
        <div>
        <div className={styles.title}>
            <div>
            {count} תרומות 
            </div>
        </div>
        <div className={styles.buttonDiv}>
           {/* <button className={styles.button}>הוספת שם לתפילה</button> */}
           <div className={styles.button}>
              <Link className={styles.link} to={'/addAid'}>הוספת תרומה</Link>
           </div>

        </div>
        <div className={styles.allNames}>
            <DivAid/>
        </div>
    </div>
    </div>
  )
}

export default Aid