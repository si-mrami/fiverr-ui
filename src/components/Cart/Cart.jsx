import React from 'react'
import './Cart.scss';

const Cart = ({item}) => {
  return (
    <div className="cart">
        <img src={item.img} alt="" />
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
    </div>
  )
}

export default Cart