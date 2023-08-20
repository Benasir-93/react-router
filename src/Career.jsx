import React from 'react'
import Cardrow from './Cardrow'
import Card from './Card'

function Career() {
  return (
    <>  
       <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-1536x340.webp" alt="" className='my-4'/>
       <div className='container-fluid d-flex justify-content-around  flex-wrap pb-5'>

      <Card  imageSrc="./images/c6.jpg"
       imageAlt="career"
       title="Game Development Career 2023: The Ultimate Beginners Guide"
       description="he game development industry has undergone a remarkable evolution over the years, witnessing exhilarating changes.."
       link="/"
      footerText="2 days ago. No comments"></Card>



<Card  imageSrc="./images/c5.jpg"
       imageAlt="career"
       title="Top 12 Career Opportunities for UI/UX Design"
       description="Are you passionate about offering intuitive and user-friendly digital experiences? Do you have an eye.."
       link="/"
      footerText="2 days ago. No comments"></Card>

 <Card  imageSrc="./images/c4.jpg"
       imageAlt="career"
       title="Game Development Career 2023: The Ultimate Beginners Guide"
       description="he game development industry has undergone a remarkable evolution over the years, witnessing exhilarating changes.."
       link="/"
      footerText="2 days ago. No comments"></Card>
{/* second row */}


<Cardrow imageSrc="./images/c3.jpg"
       imageAlt="career"
       title="The Future & Scope of Full Stack Developers in India"
       description="Have you ever wondered about the future of full stack developers in India? These talented.."
       link="/"
      footerText="1 days ago. No comments"></Cardrow>


<Cardrow imageSrc="./images/c1.jpg"
       imageAlt="career"
       title="5 Career Opportunities for Full Stack Development"
       description="Ever wondered what awesome job opportunities are waiting for you in the field of Full Stack Development? Well, this blog is just for you!.."
       link="/"
      footerText="1 days ago. No comments"></Cardrow>


<Cardrow imageSrc="./images/c2.jpg"
       imageAlt="career"
       title="7 Best DevOps Online Courses for Beginners in 2023"
       description="DevOps is a culture that promotes collaboration between the development team and the operations team.."
       link="/"
      footerText="1 days ago. No comments"></Cardrow>
</div>

    </>
  )
}

export default Career