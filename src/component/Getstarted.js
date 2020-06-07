
import React from 'react'

import reximage from "../images/reximage.jpeg"
import shareimage from "../images/share.svg"
import postimage from "../images/post.svg"
import earnimage from "../images/Earn.svg"

export default function Getstarted() {
    return (
        <React.Fragment >
            <article>
            < div className="faqcontent">
           
               
                    <div class="faqword">
                     <h1>How it works </h1>
                     {/* <input type="text" placeholder=" Hi, we are here to help you"></input> */}
                    
                    </div>
         
        </div>
        
         
        </article>


        <article >
        {/* <h1 class="steps"> 3 Steps</h1> */}
     <div class="getstarted">
            
            <div class="coller">

           

                    <div class="work_img">
                    <img src={postimage} alt=""/>
                    </div>
                    
                    <div class="work">
                    <h1>Post</h1>
                    <p>Unleash your most amazing creative piece.  </p>
                    {/* <p>Let your creativity come alive. </p> */}
                        {/* <button>Get Started</button> */}
                    </div>

                </div>


                <div class="coller">
                 
                <div class="work_img">
                    <img src={shareimage} alt=""/>
                    </div>

                    <div class="work">
                    <h1>Share </h1>
                   
                    <p>Share link to fans and let them support you.   </p> 
                    
                        {/* <button>Sign Up</button> */}
                    </div>
              
            </div>


            <div class="coller">

            <div class="work_img">
                        <img src={earnimage} alt=""/>
            </div>
                <div class="work">
                    <h1>Earn</h1>
                    <p> You get paid as reward for passion. </p>
                    
                        {/* <button>Sign Up</button> */}
                </div>

            

            </div>
</div>
<div class="start">
{/* <h3>Any Questions?</h3>
<h5>Contact support for assistance.</h5> */}
<button>Get Started</button>
</div>

</article> 


 </React.Fragment>
    )
}

// rexhot in three steps
// sign up ,share your content, invite friends

// https://trello.com/guide
// #fff8f3

// We’ve built the service you always dreamed of