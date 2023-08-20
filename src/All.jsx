import React from 'react'
import Card from './Card'
import Cardrow from './Cardrow'


function All() {
  return (
    <>
        <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-1536x340.webp" alt="" className='my-4'/>
        <br />
        <div className='container-fluid d-flex justify-content-around flex-wrap pb-5'>

        <Card  imageSrc="./images/f4.jpg"
        imageAlt="Full Stack Developer Tools"
        title="Best Ways to Learn Full Stack Development in 2023"
        description="Full stack development is and will be a promising and an in-demand career in the.."
        link="/"
       footerText="2 days ago. No comments"></Card>
       
         <Card  imageSrc="./images/s3.jpg"
        imageAlt="Full Stack Developer Tools"
        title="10 Best Data Science Online Courses for Beginners | 2023"
        description="In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most.."
        link="/"
       footerText="2 days ago. No comments"></Card>
       
       <Card  imageSrc="./images/f1.jpg"
       imageAlt="Full Stack Developer Tools"
       title="What is Cybersecurity? Importance and its uses & the growing challenges in 2023!"
       description="Look around today, you will witness that we are more reliant on technology and devices.."
       link="/"
      footerText="4 days ago. No comments"></Card>



{/* second row */}

<Cardrow imageSrc="./images/c1.jpg"
       imageAlt="Game Developer Tools"
       title="Game Development Career 2023: The Ultimate Beginners Guide"
       description="The game development industry has undergone a remarkable evolution over the years, witnessing exhilarating changes.."
       link="/"
      footerText="4 days ago. No comments"></Cardrow>


<Cardrow imageSrc="./images/f4.jpg"
       imageAlt="Game Developer Tools"
       title="The Ultimate Guide to Real-World Full Stack Development Applications"
       description="Full stack development has become increasingly popular in recent years, with companies seeking professionals who.."
       link="/"
      footerText="5 days ago. No comments"></Cardrow>

<Cardrow imageSrc="./images/cy.jpg"
       imageAlt="Game Developer Tools"
       title="Top 10 Ethical Hacking Books for Beginner to Advanced"
       description="Did you know that according to the University of Maryland hackers attack every 39 seconds.."
       link="/"
      footerText="5 days ago. No comments"></Cardrow>



</div>
    </>
  )
}

export default All