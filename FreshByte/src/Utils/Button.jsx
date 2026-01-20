import React from 'react'
import {motion} from 'motion/react'
import './Util.css'

const Button = ({text}) => {
  return (
    <motion.button initial={{ opacity: 0, backgroundColor: "#16a34a" }}
     animate={{ opacity: 1, backgroundColor: "#16a34a" }} 
     whileTap={{ scale: 0.95 , color:"white",duration:1}}
     transition={{
            type:"tween", 
            stiffness:300
            }
        }
     className='util-button'>
      <span className='fill'></span>
      <span className='text'>{text}</span>
    </motion.button>
  )
}

export default Button
