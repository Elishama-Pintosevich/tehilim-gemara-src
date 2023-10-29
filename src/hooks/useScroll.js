import { useEffect, useState } from "react"



const useScroll = ()=>{
    const [isEnd, setIsEnd]= useState(true)
    useEffect(()=>{
        window.addEventListener("scroll", onScroll)
        return ()=>{
          window.removeEventListener("scroll", onScroll)
          console.log("end");
        }
    },[])


    const onScroll = ()=>{
        let windowHieght = window.innerHeight
    let scrollTop = document.documentElement.scrollTop
    let docHieght = document.documentElement.offsetHeight
    if(Math.ceil(scrollTop+windowHieght) === docHieght){
    //   alert("end of screen")
    setIsEnd(true)
    }
    }
    return {isEnd, setIsEnd}
}

export default useScroll
