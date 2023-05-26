import React from 'react'

export default function Search(props) {
    return (
        <div>
        <input className="form-control me-5" id={props.id} type="search" placeholder={props.search} aria-label="Search"/>
        </div>
  )
}
  