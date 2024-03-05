import React, { useState } from 'react'
import './Content.css'
//import image from './image.jpg'
import resume from './resume/PRABHU M S.pdf'
import me from './images/me.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Content() {


  return (
    <div className='container'>
      <div className='container_0'>
      <h2 className='text'>Hi There👋 I'm</h2><img src={me} alt='image'></img>
      <h4 className='my-name'>PRABHU M S</h4>
      <h2 className='text'>Fresher</h2>
      <h1 className='text'>I'm a Fresher Graduate looking for a career in a company</h1>
      <br></br>
      <a className="resume "href={resume} download="Resume">Get My Resume</a>
      </div>
      <h6 className='certificates'>Certifications</h6>
      <div className='container_2'>
        <a href='#'><div className='certificate-1'>
            <p>Certified in AZ-900 in Microsoft Learn</p>
        </div></a>
        <div className='certificate-1'>
            <p>Certified in AWS Cloud Practionier</p>
        </div>
        <div className='certificate-1'>
            <p>Certified in Nptel Exam in Java Programming</p>
        </div>
        <div className='certificate-1'>
            <p>Certified in .NET in Microsoft Learn</p>
        </div>
        <div className='certificate-1'>
            <p>Participated and Won in Internal Hackathon in Smart India Hackathon</p>
        </div>
      </div>
      <h6 className='skill'>Skills</h6>
      <div className='container_3'>
        <div className='container_3_1'>
        <div><h5>JAVA</h5><span className='bar'><span className='java'></span></span></div>
        <div><h5>C</h5><span className='bar'><span className='c'></span></span></div>
        <div><h5>C++</h5><span className='bar'><span className='cpp'></span></span></div>
        <div><h5>Python</h5><span className='bar'><span className='python'></span></span></div>
        <div><h5>SQL</h5><span className='bar'><span className='sql'></span></span></div>
        <div><h5>HTML & CSS</h5><span className='bar'><span className='html'></span></span></div>
        <div><h5>Azure and AWS</h5><span className='bar'><span className='azure'></span></span></div>
        <div><h5>Machine Learning</h5><span className='bar'><span className='mlt'></span></span></div>
        </div>
      </div>
      <h6 className='projects'>Projects</h6>
      <div className='container_4'>
        <div className='project_1'>
            <strong>Title:</strong><span></span><h5>&emsp; Edible and Poisonous Mushroom Classification Using Machine Learning</h5>
            <strong>Abstract</strong><br></br><p><p className='content'>&nbsp; &nbsp; Our Projects aims to classifiy the edibility of the mushroom. We use two types of Classification</p>
            <div className='foot'>
                <ol>
                    <li>Feature Based Classification (Decision Tree)</li>
                    <li>Image Based Classification (CNN Deep Learning Network)</li>
                </ol>
                <br></br>
                <p className='foot-content'>This two classification gives atmost accuracy in classification process</p>
                </div>
            </p>
        </div>
      </div>
      < div className='footer'>
        <div className='icon'>
          <a href='https://github.com/Prabhu-1409'>
          <GitHubIcon className='icons'></GitHubIcon>
          </a>
          <a href='https://www.linkedin.com/in/prabhu-sundhar?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDCxkuyjRRNOCXGav2QExbQ%3D%3D'>
          <LinkedInIcon className='icons'></LinkedInIcon>
          </a>
          </div>
          <div className='copy-icon'>
          <CopyrightIcon className='copy'></CopyrightIcon>
          <h5>Copyright by Prabhu</h5>
          </div>
      </div>
    </div>
  )
}

export default Content
