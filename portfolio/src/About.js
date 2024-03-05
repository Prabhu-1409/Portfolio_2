import React from 'react'
import './About.css';

function About() {
  return (
    <div className='container_5'>
    <div className='container_5_1'>
       <h1 className='about_me'>About Me</h1>
       <div className='para'><p>&nbsp; &nbsp; &nbsp; &emsp;This Prabhu and i'm an enthusiastic. Here i'm pursuing my 
        under graduate degree in Adhiyamaan College Of Engineering in the stream Computer Science and Engineering with aggregate of 88%.
        I've done my Schooling in hometown Cheyyar. I'm good in developing things especially in software field. I chose this field 
        because of my own interest in software and i'm well in thinking creatively, logically as well in implementation of this things.
        and my domain is JAVA and i recently starting studying Machine Learning for my project. Suddenly the one topic got my interest and that 
        is generative AI and i'm still researching and studying about this AI.</p>
        <h4>This is all about me</h4></div>
    </div>
    <h1 className='education'>Education</h1>
      <div className='education_box'>
        <div className='content'>
        <div className='box'>
          <p>2020 - Pursuing</p>
          <p>B.E Computer Science and Engineering</p>
          <p>Adhiyamaan College of Engineering</p>
        </div>
        <br></br>
        <div className='box1'>
          <p>2019 - 2020</p>
          <p>Higher Secondary School</p>
          <p>Wisdom Matriculation Higher Secondary School</p>
        </div>
        <br></br>
        <div className='box2'>
          <p>2017 - 2018</p>
          <p>High School</p>
          <p>Wisdom Matriculation Higher Secondary School</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
