import React from 'react'

export default function Contact_inputs(props) {
    return (
        <>
            <input type={props.type} placeholder={props.placeholder} required />
        </>
    )
}
