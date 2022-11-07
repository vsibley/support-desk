import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegFolderOpen, FaListUl } from 'react-icons/fa'

function Hero() {
    return (
        <>
            <section className="heading">
                <h1>Hello, welcome</h1>
                <p>to the Social Assitant.</p>
                <h3 className='hero-txt'>The site that allow you upload info about your social media collaborations.</h3>
                <img src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80" alt="Social media image"/>
            </section>
            <Link to='Register' className='btn btn-reverse btn-block'>
                 REGISTER
            </Link>
            <Link to='Login' className='btn '>
                 LOGIN
            </Link>
        </>
    )
}

export default Hero