import React from 'react'
import { motion} from 'framer-motion'
import './Util.css'

const Button = ({text,handleFun,bgColor,fontColor}) => {
  return (
    <motion.button whileHover={{
        scale:1.01,
        backgroundColor:`${bgColor?bgColor:"#cf4e1a"}`
    }} 
    style={{backgroundColor:`${bgColor?bgColor:"#ed5b23"}`,color:`${!bgColor?"white":"black"}` }}
    onClick={handleFun}
    whileTap={{scale:0.95}} 
    transition={{
            type:"tween", 
            stiffness:300
            }
        } className='button'>
        {text}
    </motion.button>
  )
}

export default Button
