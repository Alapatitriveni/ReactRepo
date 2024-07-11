import React from 'react'

export default function IplData(props) {
    const{Text,source,alternate,w,h,bgcolour}=props
  return(
        
    <img src={source} alt={alternate} width={w} heigth={h}></img>
  )
}
