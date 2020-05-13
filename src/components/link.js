import React from 'react'

export default function link({children, href}) {
    return (
        <a className="link" href={href}>
           {children} 
        </a>
    )
}
