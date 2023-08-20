import React from 'react'
import Card from './Card'
import Cardrow from './Cardrow'

function Cybersecurity() {
  return (
    <>       
        <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-1536x340.webp" alt=""  className='my-4'/>
        <br />
     <div className='container-fluid d-flex justify-content-around  flex-wrap pb-5'>
{/* card first row */}
     <Card  imageSrc="./images/cy1.jpeg"
       imageAlt="Full Stack Developer Tools"
       title="What is Cybersecurity? Importance and its uses & the growing challenges in 2023!"
       description="Look around today, you will witness that we are more reliant on technology and devices.."
       link="/"
      footerText="4 days ago. No comments"></Card>



     <Card  imageSrc=".\images\cy2.png"
       imageAlt="Full Stack Developer Tools"
       title="Cybersecurity Vs Ethical Hacking: Top 10 Differences"
       description="Cybersecurity & Ethical hacking and have been key in making sure that your data online.."
       link="/"
      footerText="4 days ago. No comments"></Card>


     <Card  imageSrc="./images/cy1.jpeg"
       imageAlt="Full Stack Developer Tools"
       title="Top 10 Ethical Hacking Books for Beginner to Advanced"
       description="Did you know that according to the University of Maryland hackers attack every 39 seconds.."
       link="/"
      footerText="4 days ago. No comments"></Card>
{/* second row */}



<Cardrow imageSrc="./images/top.png"
       imageAlt="cybersecuty"
       title="Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?"
       description="Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,.."
       link="/"
      footerText="2 days ago. No comments"></Cardrow>



<Cardrow imageSrc="./images/cy.jpg"
       imageAlt="cybersecuty"
       title="8 Different Types of Cybersecurity and Threats Involved"
       description="Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from.."
       link="/"
      footerText="2 days ago. No comments"></Cardrow>


<Cardrow imageSrc="./images/seven.jpg"
       imageAlt="cybersecuty"
       title="Top 7 Cyber Security Attacks in Real Life"
       description="Cyber security attacks are the type of actions that are designed to destroy, steal, modify,.."
       link="/"
      footerText="2 days ago. No comments"></Cardrow>
</div>
    </>
  )
}

export default Cybersecurity