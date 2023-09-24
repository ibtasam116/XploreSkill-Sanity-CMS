import React from 'react'

export default function Home_program_card(props) {
  return (
    <>
      <div class="course-col">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </>
  )
}
