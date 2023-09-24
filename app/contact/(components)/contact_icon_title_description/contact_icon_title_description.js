import React from 'react'

export default function Contact_icon_title_description(props) {
    return (
        <>
            <div>
                <i class={`fa fa-home ${props.icon}`}></i>
                <span>
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                </span>
            </div>
        </>
    )
}
