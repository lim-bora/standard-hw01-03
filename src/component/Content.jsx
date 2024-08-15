import React from 'react'
import Counter from './Counter'
import Status from './Status'

const Content = ({count, setCount}) => {
  return (
    <div className='Content'>
        <Counter count={count} setCount={setCount}/>
        <Status count={count}/>
    </div>
  )
}

export default Content