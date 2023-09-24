import React from 'react'

export default function Button(props) {
    return (
        <>
            <a href={props.btnHref} className={`hero_btn ${props.btnClass}`}>{props.btnTitle}</a>
        </>
    )
}
