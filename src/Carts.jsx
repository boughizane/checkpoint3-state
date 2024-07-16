import React,{useState} from 'react'
import Modal from './Modal'

const Carts = ({el}) => {
    const [show, setshow] = useState(false)
  return (
    <div className='carts'> 
    {show==true?<Modal el={el} setshow={setshow}/>:null}
    <img src={el.image} />
    <button onClick={()=>setshow(true)}>show details</button>
    </div>
  )
}

export default Carts
