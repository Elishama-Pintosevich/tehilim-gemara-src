import React, { useEffect, useState } from 'react'
import styles from '../Names.module.css'
import axios from 'axios'
import useScroll from '../hooks/useScroll'
import Loading from './Loading'

const DivName = () => {
    const [names, setNames] = useState([])
    const {isEnd, setIsEnd} = useScroll()
    const [skipNext, setSkipNext]=useState(1)
    const [loading, setLoading]= useState(false)
    useEffect(()=>{
        if(isEnd){
            getData(skipNext);
            setSkipNext(skipNext+1)}
    },[isEnd])
    const getData = async(_page)=>{
        try {
            const {data} = await axios.get(`https://good-action.cyclic.app/names?limit=10&page=${_page}`)
            console.log(data);
            setNames((names)=>[...names, ...data])
            console.log(names);
            setIsEnd(false)
            setLoading(true)
        } catch (error) {
            console.log(error);
        }
        

    }
  return (
    <div>
      {loading ? names.map((ele, i)=>{
        return(
            <div key={ele.name+i} className={styles.nameDiv}>
                <div className={styles.desk}>{ele.desc}</div>
                <div className={styles.names}>{ele.name}</div>
            </div>
        )
      }) :<div className={styles.buttonDiv}> <Loading/> </div> }
    </div>
  )
}

export default DivName