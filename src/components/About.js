import React from 'react'

const About = (props) => {
    return (
        <>
        <div className="container">
            <h1 style={{color:props.mode==='dark'?'white':'black'}}>About us</h1>
            <h3 style={{color:props.mode==='dark'?'white':'black'}}>What is a text analyser / word counter? ... It is a tool that allows you to analyse a text by counting the number of sentences, words and characters present.</h3>
        </div>
        </>
    )
}
export default About;