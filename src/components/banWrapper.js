import React from "react";

function BanWrapper (props) {
    // get chidlren from props
     const {children} = props
    return (
        <div
            id={props.banID}
            className={props.classname}
            style={{
              padding: `2rem 0.5em`, lineHeight: '20px'
            }}
        >{children}</div>
            
    )
}

export default BanWrapper;