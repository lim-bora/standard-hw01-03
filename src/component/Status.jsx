import React from 'react'

const Status = ({count}) => { //현재 카운트 숫자 props로 전달받음
  return (
    <div>
        <p>{count > 10 ? "High count!" : "Keep counting..."}</p> {/* 전달받은 현재 카운트값이 10보다 아래면 High~*/}
    </div>
  )
}

export default Status