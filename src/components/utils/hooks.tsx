import * as React from 'react'
import { rand } from './index'

const {useEffect, useState} = React
export function randColor (){
    const [r, setR] = useState(rand(6))

    useEffect(() => {
      const timeID = setInterval(() => setR(rand(6)), 8000)
      return ()=>clearInterval(timeID)
    }, [])

    return r;
}