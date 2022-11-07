import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegFolderOpen, FaListUl } from 'react-icons/fa'

function Hero() {
    return (
        <>
        <div className='page'>

            <section className="heading">
                <h1>Hello &amp; welcome</h1>
                <p>to the Social Assitant.</p>
                <h3 className='hero-txt'>The site that allow you upload all the info <br/>about your social media collaborations in one place.</h3>
                <img src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80" alt="Social media image"/>
            </section>
            <Link to='Register' className='btn btn-reverse btn-block'>
                 REGISTER
            </Link>
            <Link to='Login' className='btn '>
                 LOGIN
            </Link>
        </div>
        </>
    )
}

export default Hero