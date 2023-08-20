import React from 'react'
import Cardrow from './Cardrow'
import Card from './Card'

function Datascience() {
  return (
    <><h1 className='text-start p-4 mx-5'>Data Science</h1>
    <p className='text-start  px-3 lh-base w-75 mx-5 '>One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration.</p>
    
    <p className='text-start px-3 lh-base w-75 mx-5 mt-5'>The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</p>

    <br />
     <div className='container-fluid d-flex justify-content-around  flex-wrap pb-5'>


<Card  imageSrc="./images/s1.jpg"
       imageAlt="datascience"
       title="10 Best Data Science Online Courses for Beginners | 2023"
       description=">In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most.."
       link="/"
      footerText="4 days ago. No comments"></Card>


<Card  imageSrc="./images/s2.jpg"
       imageAlt="datascience"
       title="The Ultimate Guide to Real-World Full Stack Development Applications"
       description=">Full stack development has become increasingly popular in recent years, with companies seeking professionals .."
       link="/"
      footerText="1 days ago. No comments"></Card>


<Card  imageSrc="./images/s3.jpg"
       imageAlt="datascience"
       title="Data Science Webinars and Workshops"
       description=">In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data .."
       link="/"
      footerText="3 days ago. No comments"></Card>
{/* second row */}

<Cardrow imageSrc="./images/s4.jpg"
       imageAlt="datascience"
       title="10 Best Data Science Frameworks in 2023"
       description="Does data scientists fascinate you? If yes, you must definitely know about data science frameworks..."
       link="/"
      footerText="4 days ago. No comments"></Cardrow>


<Cardrow imageSrc="./images/s5.jpg"
       imageAlt="datascience"
       title="How Long Would It Take to Learn Data Science?"
       description="Have you ever wondered how much time it takes to learn data science? It’s an.."
       link="/"
      footerText="4 days ago. No comments"></Cardrow>

<Cardrow imageSrc="./images/s6.jpg"
       imageAlt="datascience"
       title="Everything about Data Scientist Salary in India | 2023"
       description="re you curious about the highly sought-after field of data science and the potential it.."
       link="/"
      footerText="4 days ago. No comments"></Cardrow>
</div></>
  )
}

export default Datascience