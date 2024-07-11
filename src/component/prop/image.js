import React from 'react'

export default function Image(props) {
    const{source,alternate,w,h}=props
  return (
    <img src={source} alt={alternate} width={w} heigth={h}></img>
   
  )
}
