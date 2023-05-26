import React from 'react'
import './Anchor.css';
export default function Anchor(props) {
    return (
        <a href="/" id={props.id} >
          <div>
        <div>
          <img src={props.source} id='image' alt='imageName' />
        </div>
          <div id='tagName-one' >{props.tagName}</div>
          <div id='tagPost-one' >{props.tagPost}</div>
      </div>
    </a>
  )
}