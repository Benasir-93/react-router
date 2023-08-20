import React from 'react'
import Card from './Card'
import Cardrow from './Cardrow'

function Fullstack() {
  return (
    <>
   <h1 className='text-start p-4 mx-5'>Full Stack Devlopment</h1>
    <p className='text-start  px-3 lh-base w-75 mx-5 '>Are you a curious geek with an unstoppable urge to develop? Then, your Full Stack Development knack would be sun-glazed with an innovative and informative piece of knowledge that comes from Top industrialists and Appreneurs!</p>
    
    <p className='text-start px-3 lh-base w-75 mx-5 mt-5'>The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</p>

    <br />
    <div className='container-fluid d-flex justify-content-around flex-wrap pb-5'>

  
<Card  imageSrc="images/f6.jpg"
        imageAlt="Full Stack Developer Tools"
        title="Best Ways to Learn Full Stack Development in 2023"
        description="Full stack development is and will be a promising and an in-demand career in the.."
        link="/"
       footerText="2 days ago. No comments"></Card>


<Card  imageSrc="images/f5.jpg"
        imageAlt="Full Stack Developer Tools"
        title="The Ultimate Guide to Real-World Full Stack Development Applications"
        description="Full stack development has become increasingly popular in recent years, with companies seeking professionals who.."
        link="/"
       footerText="2 days ago. No comments"></Card>



<Card  imageSrc="images/f4.jpg"
        imageAlt="Full Stack Developer Tools"
        title="The Top 10 Tools Every Full Stack Developer Should Master in 2023"
        description="As a full stack developer, having the right set of tools is crucial for you.."
        link="/"
       footerText="6 days ago. No comments"></Card>
{/* second row */}

<Cardrow imageSrc="images/f3.png"
       imageAlt="Game Developer Tools"
       title="10 Best Data Science Frameworks in 2023"
       description="Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.."
       link="/"
      footerText="1 days ago. No comments"></Cardrow>


<Cardrow imageSrc="images/f2.jpg"
       imageAlt="Game Developer Tools"
       title="How Long Would It Take to Learn Data Science?"
       description="Have you ever wondered how much time it takes to learn data science? .."
       link="/"
      footerText="1 days ago. No comments"></Cardrow>


<Cardrow imageSrc="images/f1.jpg"
       imageAlt="Game Developer Tools"
       title="Everything about Data Scientist Salary in India | 2023"
       description="Are you curious about the highly sought-after field of data science and the potential it .."
       link="/"
      footerText="1 days ago. No comments"></Cardrow>

    </div>
    </>
  )
}

export default Fullstack