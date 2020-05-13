import React from 'react'

export default function floatingBtn(props) {
    return (
        <>
            <button
                className={props.className}
                onClick={props.changeSomething}
            >
              {props.name}
            </button>
        </>
    )
}
