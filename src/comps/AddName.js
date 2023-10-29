import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styles from '../Names.module.css'
import axios from 'axios';

const AddName = () => {
  const nav = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm()
  const onPress = async(bodyData)=>{
    console.log(bodyData);
    try {
     const resp = await axios.post('https://good-action.cyclic.app/names/addName', {
        name: bodyData.name,
        desc: bodyData.desc
      })
      console.log(resp);
      nav("/")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className={styles.title}>
          בקשת סיוע
      </div>
      <form onSubmit={handleSubmit(onPress)}>
         <div className={styles.inputContainer}>
            <input {...register("name", {required:true, minLength:2, maxLength:500})} type="text" className={styles.input} placeholder='כתוב את הבקשה'/>
            {errors.name && <div style={{color:'white'}}>הקלד עד 500 תווים</div>}
            <input {...register("desc", {required:true, minLength:2, maxLength:50})} type="text" className={styles.input} placeholder='כתוב שם ומספר פלאפון'/>
            {errors.desc && <div style={{color:'white'}}>הקלד עד 50 תווים</div>}
         </div>
         <div className={styles.buttonContainer}>
            <button className={styles.buttonName}>הוסף</button>
         </div>

      </form>
    </div>
  )
}

export default AddName