import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../Header.module.css'
import styles2 from '../Names.module.css'
import Loading from './Loading'

const Buttons = () => {
    
    const [loading, setLoading]= useState(false)
    // const [loading2, setLoading2]= useState(false)
    const [names, setNames] = useState([])
    // const [limit, setLimit]=useState(true)
    const [percentage, setPercentage] = useState([])
    const [toggle, setToggle] = useState(true)

    const nav = useNavigate()

    useEffect(()=>{
        getData()
    },[])
    
    const getData = async(_limit=3)=>{
        try {
        //    setLoading2(true)
            const {data} = await axios.get(`https://good-action.cyclic.app/teilim`)
            // const {data} = await axios.get(`https://good-action.cyclic.app/tractates?reverse=yes&limit=${_limit}`)
             setNames([...data])
            // setLoading2(false)
            console.log(data);
            setLoading(true)
        } catch (error) {
            console.log(error);
        }
    }
    const onPress = (_id)=>{
         nav(`/teilim/${_id}`)
    }
    const onAll = ()=>{
        // setLimit(false)
        getData(40)
        setToggle(true)
    }
    const onCheck = ()=>{
       
        const nums = names.map((ele)=>{
            const sum = ele.pages.reduce((sum, current)=> sum + current, 0)
            let final = Math.round(sum / ele.count *100) 
            return(
                final
            )
        })
        console.log(nums);
        setPercentage(nums) 
        setToggle(!toggle)
    }
  return (
    <div>
        {loading ? names.map((ele, i)=>{
            return(
                
                <div key={ele+i} className={styles.buttonDiv}>
                    <button onClick={()=>{onPress(ele._id)}} className={styles.button2}>{ele.name}</button>
                    <div onClick={onCheck.bind(this, ele._id)} className={styles.quantity}>{toggle ? ele.count + " Псалмов" : percentage[i]+'%'}</div>
                </div>
                
            )
        }) : <div className={styles.buttonDiv}><Loading/></div>}
        <div className={styles2.bgNote}>
            <a className={styles2.link} target={'_blank'} href={`https://vaikra.com/donate-form?utm_source=tehilim&utm_medium=site`}>Поддержать Проект</a>
        </div>
    </div>
  )
}

export default Buttons