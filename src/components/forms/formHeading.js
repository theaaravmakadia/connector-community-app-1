import React from "react"
import PageHeading from "../../components/pages/page-heading"
//Components
import "../../styles/components/forms/form-heading.scss"

export default (props) => {
  return (
    <>
      <div className='formHeading'>
        <PageHeading text={props.text}></PageHeading>
    </div>
    </>
  )
}

