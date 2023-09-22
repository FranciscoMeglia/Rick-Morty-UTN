import React from 'react'
import './Filter.css'

export const Filter = ({filterFun , ident , text}) => {
  return (
    <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id={ident} onClick={filterFun}/>
        <label className="form-check-label" htmlFor={ident}>{text}</label>
    </div>
  )
}
