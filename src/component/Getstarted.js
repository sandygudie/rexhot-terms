import React from "react";

import reximage from "../images/reximage.jpeg";
import shareimage from "../images/share.svg";
import postimage from "../images/post.svg";
import earnimage from "../images/Earn.svg";

export default function Getstarted() {
  return (
    <React.Fragment>
      <article>
        <div className="faqcontent">
          <div class="faqword">
            <h1>How it works </h1>
          </div>
        </div>
      </article>

      <article>
        <div class="getstarted">
          <div class="coller">
            <div class="work_img">
              <img src={postimage} alt="" />
            </div>

            <div class="work">
              <h1>Post</h1>
              <p>Unleash your most amazing creative piece. </p>
            </div>
          </div>

          <div class="coller">
            <div class="work_img">
              <img src={shareimage} alt="" />
            </div>

            <div class="work">
              <h1>Share </h1>

              <p>Share link to fans and let them support you. </p>
            </div>
          </div>

          <div class="coller">
            <div class="work_img">
              <img src={earnimage} alt="" />
            </div>
            <div class="work">
              <h1>Earn</h1>
              <p> You get paid as reward for passion. </p>
            </div>
          </div>
        </div>
        <div class="start">
          <button>Get Started</button>
        </div>
      </article>
    </React.Fragment>
  );
}
