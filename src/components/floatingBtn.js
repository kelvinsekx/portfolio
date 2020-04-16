import React from 'react'

export default function floatingBtn(props) {
    return (
        <>
            <button
                className={props.class}
                onClick={props.changeSomething}
            >
              {props.name}
            </button>
        </>
    )
}
