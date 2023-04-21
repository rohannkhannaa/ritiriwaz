import React, {useState} from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default () => {
  const [num, setNum] = useState(80);
  const func = ()=>{
    setTimeout(function() {
      setNum(0);
    }, 2000);
  }
  // func();
  return (
    <Confetti
    numberOfPieces = {num}
    gravity = {0.1}
    tweenDuration={1}
    />
  )
}