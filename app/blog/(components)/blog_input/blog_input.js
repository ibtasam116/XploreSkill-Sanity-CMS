import React from 'react'

export default function Blog_input(props) {
    return (
        <>
            <input type={props.type} placeholder={props.placeholder}  required />
        </>
    )
}
