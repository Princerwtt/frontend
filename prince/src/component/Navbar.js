import React from 'react'
import Button from './Button';
import Search from './Search';
import './Navbar.css';

export default function Navbar(props){
    return(
        <div>
        <nav className="navbar" id='nav1'>
            <div className="container-fluid">
            <a className="navbar-brand" href="/"><h1 id='head'>imgur</h1></a>
                <Button button='NewPost' id='newPost'/>
                <Button button='icon'/>
                <Search search='Images, #tags, @users oh my!' id='searchBar' />
                <Button button='GoAdFree'  id='goAdFree'/>
                <Button button='SignIn' id='signIn'/>  
                <Button button='SignUp' id='signUp'/>
            </div>
            </nav>
    </div>
  )
}
  