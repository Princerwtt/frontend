import React from 'react'

export default function Button(props) {
    return (
        <div>
        <button className="btn btn-outline-success" id={props.id} type="submit">{props.button}</button>
        </div>
  )
}
  