import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import styles from '../Header.module.css'
import styles2 from '../Names.module.css'
import Loading from './Loading'
import img from '../assets/6SSp.gif'
import Note from './Note'

const OneTractate = () => {
    const params = useParams()
    const [tract, setTract] = useState({})
    const nav = useNavigate()
    const [top, setTop] = useState(0)
    const [gif, setGif] = useState(false)
    const [loading, setLoading]=useState(false)
    const [link, setLink] = useState(false)
    const [index, setIndex]=useState(1)
    const [calc, setCalc] = useState("")
    // const pages = ["ב","ב","ג","ג","ד","ד","ה","ה","ו","ו","ז","ז","ח","ח","ט","ט","י","י","יא","יא","יב","יב","יג","יג","יד","יד","טו","טו","טז","טז","יז","יז","יח","יח","יט","יט","כ","כ","כא","כא","כב","כב","כג","כג","כד","כד","כה","כה","כו","כו","כז","כז","כח","כח","כט","כט","ל","ל","לא","לא","לב","לב","לג","לג","לד","לד","לה","לה","לו","לו","לז","לז","לח","לח","לט","לט","מ","מ","מא","מא","מב","מב","מג","מג","מד","מד","מה","מה","מו","מו","מז","מז","מח","מח","מט","מט","נ","נ","נא","נא","נב","נב","נג","נג","נד","נד","נה","נה","נו","נו","נז","נז","נח","נח","נט","נט","ס","ס","סא","סא","סב","סב","סג","סג","סד","סד","סה","סה","סו","סו","סז","סז","סח","סח","סט","סט","ע","ע","עא","עא","עב","עב","עג","עג","עד","עד","עה","עה","עו","עו","עז","עז","עח","עח","עט","עט","פ","פ","פא","פא","פב","פב","פג","פג","פד","פד","פה","פה","פו","פו","פז","פז","פח","פח","פט"
    // ,"פט","צ","צ","צא","צא","צב","צב","צג","צג","צד","צד","צה","צה","צו","צו","צז","צז","צח","צח","צט","צט","ק","ק","קא","קא","קב","קב","קג","קג","קד","קד","קה","קה","קו","קו","קז","קז","קח","קח","קט","קט","קי","קי","קיא","קיא","קיב","קיב","קיג","קיג","קיד","קיד","קטו","קטו","קטז","קטז","קיז","קיז","קיח","קיח","קיט","קיט","קכ","קכ","קכא","קכא","קכב","קכב","קכג","קכג","קכד","קכד","קכה","קכה","קכו","קכו","קכז","קכז","קכח","קכח","קכט","קכט","קל","קל","קלא","קלא","קלב","קלב","קלג","קלג","קלד","קלד","קלה","קלה","קלו","קלו","קלז","קלז","קלח","קלח","קלט","קלט","קמ","קמ","קמא","קמא","קמב","קמב","קמג","קמג","קמד","קמד","קמה","קמה","קמו","קמו","קמז","קמז","קמח","קמח","קמט","קמט","קנ","קנ","קנא","קנא","קנב","קנב","קנג","קנג","קנד","קנד","קנה","קנה","קנו","קנו","קנז","קנז","קנח","קנח","קנט","קנט","קס","קס","קסא","קסא","קסב","קסב","קסג","קסג","קסד","קסד","קסה","קסה","קסו","קסו","קסז","קסז","קסח","קסח","קסט","קסט","קע","קע","קעא","קעא","קעב","קעב","קעג","קעג","קעד","קעד","קעה","קעה","קעו","קעו","קעז","קעז","קעח","קעח"]
    // const amud =["ע״א","ע״ב"]
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        try {
            // const {data} = await axios.get(`https://good-action.cyclic.app/tractates/single/${params.id}`)
            const {data} = await axios.get(`https://good-action.cyclic.app/teilim/single/${params.id}`)
             setTract({...data[0]})
            console.log(data);
            onCheck(data[0].pages)
            setLoading(true)
        } catch (error) {
            console.log(error);
        }
    }
    const onCheck = (_data)=>{
            const sum = _data.reduce((sum, current)=> sum + current, 0)
            console.log(sum);
            setCalc(sum)
       
    }
    // const postData =async()=>{
    //     try {
    //         const {data} = await axios.post(`http://localhost:3002/teilim/addBook`,{
    //             name:"Теилим",
    //             count:150,
    //             pages:Array(150).fill(0),
    //         } 
    //         )
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    const onPress = (_id)=>{
        if(tract.pages[_id]){
            tract.pages[_id]=0
        }else{
            tract.pages[_id]=1
            setTop(document.documentElement.scrollTop)
            setGif(true)
            setLink(true)
            setIndex(_id)
            setTimeout(()=>{setGif(false)},2000)
            
        }
        setTract({...tract})
        onCheck(tract.pages)
      

    }
    // const onReset = ()=>{
    //       setTract({...tract, pages:[...first]})
    // }
    const sendData = async(_id, _data)=>{
                try {
                    const {data} = await axios.put(`https://good-action.cyclic.app/teilim/setPages/${_id}`,{
                        name:tract.name,
                        count:tract.count,
                        pages:_data,
                    } 
                    )
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
    }
  return (
    <div className={styles.text}>
        {gif && <div className={styles2.img} style={{top:top+180}}>
           <img  src={img}/>
        </div>}
        {
            link && <div>
                <Note setLink={setLink} index={index}/>
            </div>
        }
        
        <div className={styles.subTitle}>
            <div>
              <div className={styles.miniTitle}>Зарядите свою душу силой псалмов</div>
              Давид, великий царь и пророк, оставил нам дар – мудрые слова и молитвы, известные как псалмы. Эти стихи несут в себе духовную мощь и вдохновение. Они могут стать вашими спутниками в борьбе с злом и поддержать ваши добрые дела.
            </div>
        </div>
    <div className={styles2.buttonDiv2}>
           <div className={styles2.button}>
              <button onClick={()=>{nav('/')}} className={styles2.link}>Вернуться назад </button>
           </div>
           <div className={styles.remain}>
           Прочитано {calc} Псалмов
           </div>
     </div>
    <div className={styles.buttons}>
        {loading ? tract.pages.map((ele, i)=>{
            return(
                <div key={Math.random()} className={styles.buttonDiv}>
                    <button style={ ele ? {backgroundColor:'#A82626'} : {backgroundColor:'#265BA8'}} onClick={()=>{onPress(i); sendData(tract._id, tract.pages);}} className={styles.button}>{i+1} {ele ? "✓" : ""}</button>
                    {/* <div onClick={()=>{onPress(i); sendData(tract._id, tract.pages)}} className={styles.quantity}>{ele ? "Прочитано ✓" : " Прочитать"}</div> */}
                    
                     
                </div>
            )
        }) : <Loading/>}
    </div>
    </div>
  )
}

export default OneTractate