import React from 'react'

const Counter = ({count, setCount}) => { ////현재 카운트, 업데이트할 카운트
    //증가이벤트 함수
    const increment = () => {
        setCount(count + 1); 
      };

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter