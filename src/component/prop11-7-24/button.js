import React from 'react'

export default function Button(prop) {
    const {word,w,h,bgcolor="green"}=prop
  return (
    <button text={word} width={w} height={h} color={bgcolor}>{word}</button>
  )
}
