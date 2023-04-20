import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
    numberOfPieces = {50}
    gravity = {0.1}
    tweenDuration={1}
      width={width}
      height={height}
    />
  )
}