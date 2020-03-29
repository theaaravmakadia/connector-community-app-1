import React from 'react'

//Stylesheets


export default (props) => {
    return (
      <label>
          {props.label}
        <input type={props.type} name={props.name} value = {props.value} placeholder={props.placeholder} maxlength={props.maxlength} minLength={props.minLength}/>
      </label>
    )
  }