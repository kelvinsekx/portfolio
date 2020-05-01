import React from 'react'

export default function link({children, href}) {
    return (
        <a class="link" href={href}>
           {children} 
        </a>
    )
}
