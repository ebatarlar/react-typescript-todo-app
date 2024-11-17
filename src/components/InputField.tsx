import React from 'react';
import './styles.css';

const InputField = () => {
  return (
    <form action="" className='input'>
        <input type="text" placeholder='Enter A Task' className='input_box' />
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField