import React from 'react'
import Navbar from './Navbar'
import './Header.css';
import Anchor from './Anchor';

export default function Header() {
    return (
        <div id='header' >
        <Navbar/>
        <br />
        <section className='container-one'>
        <h3>GIFs, uh, find a way.</h3>
            <br />
            <div>
            <div>
                <span id='exploreTags' >EXPLORE TAGS</span>
                <span id='moreTags' >
                <a href="/" id='moreTags-one' >MORE TAGS +</a>
                </span>
              </div>
              <div id='anchor' >
                <Anchor id='a1' source='https://i.imgur.com/Rq2O8Ga_d.jpg?maxwidth=800&shape=thumb&fidelity=high' tagName='Mental Health' tagPost='7,797 Posts'/>
                <Anchor id='a2' source='https://i.imgur.com/W5yeBvr_d.jpg?maxwidth=800&shape=thumb&fidelity=high' tagName='Wholesome' tagPost='33,503 Posts'/>
                <Anchor id='a3' source='https://i.imgur.com/tUX1dpv_d.jpg?maxwidth=800&shape=thumb&fidelity=high' tagName='Unmuted' tagPost='15,685 Posts'/>
                <Anchor id='a4' source='https://i.imgur.com/nrFCOUB_d.jpg?maxwidth=800&shape=thumb&fidelity=high' tagName='Gaming' tagPost='299,041 Posts'/>
                <Anchor id='a5' source='https://i.imgur.com/A2MU7EC_d.jpg?maxwidth=800&shape=thumb&fidelity=high' tagName='Astronomy' tagPost='6,279 Posts'/>
                <Anchor id='a6' source='https://i.imgur.com/9r1qCDq_d.jpg?maxwidth=800&shape=thumb&fidelity=high' tagName='Funny' tagPost='2,669,739 Posts'/>
                <Anchor id='a7' source='https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high' tagName='Space' tagPost='30,373 Posts'/>
                <Anchor id='a8' source='https://i.imgur.com/avRBRpN_d.jpg?maxwidth=800&shape=thumb&fidelity=high' tagName='Aww' tagPost='709,416 Posts'/>
              </div>
              </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
  )
}
  