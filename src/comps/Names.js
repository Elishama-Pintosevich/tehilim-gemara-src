import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Names.module.css'
import DivName from './DivName'
import axios from 'axios'

const Names = () => {
  const [count, setCount] = useState(0)
  useEffect(()=>{
     getData()
  },[])
  const getData = async()=>{
    try {
        const {data} = await axios.get(`https://good-action.cyclic.app/names/count`)
        console.log(data);
        setCount(data.count)
    } catch (error) {
        console.log(error);
    }
    

}
  return (
    <div>
        <div className={styles.title}>
            <div>
            {count} בקשות סיוע  
            </div>
        </div>
        <div className={styles.buttonDiv}>
           {/* <button className={styles.button}>הוספת שם לתפילה</button> */}
           <div className={styles.button}>
              <Link className={styles.link} to={'/addReq'}>בקשת סיוע</Link>
              <Link className={styles.link} to={'/give'}>רשימת תרומות</Link>
           </div>

        </div>
        <div className={styles.allNames}>
            <DivName/>
        </div>
    </div>
  )
}

export default Names