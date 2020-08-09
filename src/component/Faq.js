import React, { Component } from "react";

export class Faq extends Component {
  state = {
    current: 0,
  };

  toggle(index) {
    this.setState({
      current: index,
    });
  }

  render() {
    return (
      <React.Fragment>
        <article className="faqcontent">
          <div class="faqword">
            <h1> Frequently Asked Questions. </h1>
          </div>
        </article>

        <section>
          <div className="questions">
            <div class="containerone">
              <div id="account">
                <h4 style={{ color: "#da9b3d" }}> General Questions</h4>

                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 1)}>
                    <div>What is Rexhot? </div>
                  </a>

                  <div
                    className={`collapsible ${
                      this.state.current === 1 ? "open " : ""
                    }`}
                  >
                    Rexhot is a community for creators. A place where creators
                    get connected, share useful contents and various works of
                    art and get values (Hots) from friends, fans and the
                    community. (Hots) they earned has currency equivalent and
                    hence can be easily withdrawal from the Rexhot wallets to
                    their bank accounts.
                  </div>
                </div>

                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 2)}>
                    <div className="faq-toggle-body">
                      {" "}
                      How does Rexhot Works?{" "}
                    </div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 2 ? "open " : ""
                    }`}
                  >
                    You create Rexhot account, explore and get connected. Then
                    create useful contents or share your works of arts, designs
                    or products and services you offer. Your friends/fans will
                    see it, support you by giving you Hots. You can as well
                    share your Rexhot account url to your friends on whatsApp,
                    Facebook, Instagram, Linkedin, Twitter.
                  </div>
                </div>
                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 3)}>
                    <div>how do i open an account?</div>
                  </a>

                  <div
                    className={`collapsible ${
                      this.state.current === 3 ? "open " : ""
                    }`}
                  >
                    To open Rexhot account you need to have a valid email
                    address. Visit <a href="#">Rexhot.com </a> to sign up with
                    your valid email address, username and strong Password.
                    After successful signing up you will get a link via your
                    email for the verification, click on the link to get your
                    account verified, then you are good to go!!!.
                  </div>
                </div>

                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 4)}>
                    <div className="faq-toggle-body">
                      {" "}
                      Forgot Username or Password?{" "}
                    </div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 4 ? "open " : ""
                    }`}
                  >
                    Visit Rexhot.com, then on the login page click on{" "}
                    <a href="#">Forgot Password</a>
                    and then enter the email address you used in creating your
                    Rexhot account and <a href="#">Submit. </a>A link to reset
                    to your password will be sent to your Email. Click on the
                    link and then reset your password.
                  </div>
                </div>

                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 5)}>
                    <div className="faq-toggle-body">
                      {" "}
                      How do give hots to others?{" "}
                    </div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 5 ? "open " : ""
                    }`}
                  >
                    Once you are connected with the creator on Rexhot, on the
                    creators page/posts or content, Click on the blinking Red
                    Hot icon and Enter Amount of hot you wants to give and Send
                    Hot. You can also give hots by going to the Person’s
                    profile, follow him or her and then click on the blinking
                    Red Hot Icon, enter the amount of hot you want to give and
                    Send Hot.
                  </div>
                </div>

                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 6)}>
                    <div className="faq-toggle-body">
                      {" "}
                      How can users search for other users?{" "}
                    </div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 6 ? "open " : ""
                    }`}
                  >
                    Login to <a href="#">Rexhot.com</a> ,click on Connect/Search
                    tab and search the name of the person or scroll down and
                    find the people/users you wants to follow.
                  </div>
                </div>

                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 7)}>
                    <div className="faq-toggle-body">
                      {" "}
                      How do I delete my account?{" "}
                    </div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 7 ? "open " : ""
                    }`}
                  >
                    While we have a registered address and a physical office in
                    accordance with the corporate regulations of Nigeria, the
                    business we conduct is mainly online. This includes running
                    ads for our subscribers, and also connecting merchants and
                    purchasers on our online platform.
                  </div>
                </div>
                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 8)}>
                    <div className="faq-toggle-body">
                      How do I delete my account?
                    </div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 8 ? "open " : ""
                    }`}
                  >
                    While we have a registered address and a physical office in
                    accordance with the corporate regulations of Nigeria, the
                    business we conduct is mainly online. This includes running
                    ads for our subscribers, and also connecting merchants and
                    purchasers on our online platform.
                  </div>
                </div>
              </div>

              {/* no 2 */}
              <div id="Earning">
                <h4 style={{ color: "#da9b3d" }}> Account</h4>
                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 9)}>
                    <div>Who can see my account?</div>
                  </a>

                  <div
                    className={`collapsible ${
                      this.state.current === 9 ? "open " : ""
                    }`}
                  >
                    While Eden’s plans run on a monthly schedule, we understand
                    // that it’s a significant lifestyle change for first-time
                    customers, // and so we offer the Eden Free trials, where we
                    let you ‘sample’ the plan you’re interested // in for a week
                    before you finally decide to kickstart your monthly
                    subscription.
                  </div>
                </div>

                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 10)}>
                    <div className="faq-toggle-body">
                      {" "}
                      can I have multiple accounts?{" "}
                    </div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 10 ? "open " : ""
                    }`}
                  >
                    Each users at Rexhot.com should have only one account but
                    multiple pages. Thus you can have as many pages as you can
                    maintain but you can only have one account.
                  </div>
                </div>
                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 18)}>
                    <div className="faq-toggle-body">
                      {" "}
                      Can I link Rexhot to my other social media?{" "}
                    </div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 18 ? "open " : ""
                    }`}
                  >
                    Yes, Rexhot has this feature enabled. You can link your
                    account to multiple or your other social media accounts.
                  </div>
                </div>
                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 11)}>
                    <div>Are there any restrictions for posting?</div>
                  </a>

                  <div
                    className={`collapsible ${
                      this.state.current === 11 ? "open " : ""
                    }`}
                  >
                    While Eden’s plans run on a monthly schedule, we understand
                    // that it’s a significant lifestyle change for first-time
                    customers, // and so we offer the Eden Free trials, where we
                    let you ‘sample’ the plan you’re interested // in for a week
                    before you finally decide to kickstart your monthly
                    subscription.
                  </div>
                </div>

                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 12)}>
                    <div className="faq-toggle-body">
                      {" "}
                      Can I delete or edit a post
                    </div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 12 ? "open " : ""
                    }`}
                  >
                    Your posts on Rexhot.com can be edited and deleted.
                  </div>
                </div>
                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 13)}>
                    <div className="faq-toggle-body">
                      {" "}
                      How can I promote my account?
                    </div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 13 ? "open " : ""
                    }`}
                  >
                    You promote your account by creating and posting rich
                    contents and by getting your friends from other social media
                    platforms to endorse your work. Thus the more fan base or
                    connections you have and the more original and creative
                    contents you create, the more you promote yourself.
                  </div>
                </div>
              </div>
            </div>

            {/* container two */}
            <div class=" containertwo">
              {/* no 3 */}
              <div id="payment">
                <h4 style={{ color: "#da9b3d" }}> Payment</h4>

                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 14)}>
                    <div>How do I get charged for Hots?</div>
                  </a>

                  <div
                    className={`collapsible ${
                      this.state.current === 14 ? "open " : ""
                    }`}
                  >
                    While Eden’s plans run on a monthly schedule, we understand
                    // that it’s a significant lifestyle change for first-time
                    customers, // and so we offer the Eden Free trials, where we
                    let you ‘sample’ the plan you’re interested // in for a week
                    before you finally decide to kickstart your monthly
                    subscription.
                  </div>
                </div>

                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 15)}>
                    <div className="faq-toggle-body">
                      {" "}
                      What type of credit cards are accepted?{" "}
                    </div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 15 ? "open " : ""
                    }`}
                  >
                    While we have a registered address and a physical office in
                    accordance with the corporate regulations of Nigeria, the
                    business we conduct is mainly online. This includes running
                    ads for our subscribers, and also connecting merchants and
                    purchasers on our online platform.
                  </div>
                </div>
                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 16)}>
                    <div>Is payment secure? I don’t trust online payments.</div>
                  </a>

                  <div
                    className={`collapsible ${
                      this.state.current === 16 ? "open " : ""
                    }`}
                  >
                    While Eden’s plans run on a monthly schedule, we understand
                    // that it’s a significant lifestyle change for first-time
                    customers, // and so we offer the Eden Free trials, where we
                    let you ‘sample’ the plan you’re interested // in for a week
                    before you finally decide to kickstart your monthly
                    subscription.
                  </div>
                </div>

                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 17)}>
                    <div className="faq-toggle-body">
                      {" "}
                      What information are required{" "}
                    </div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 17 ? "open " : ""
                    }`}
                  >
                    While we have a registered address and a physical office in
                    accordance with the corporate regulations of Nigeria, the
                    business we conduct is mainly online. This includes running
                    ads for our subscribers, and also connecting merchants and
                    purchasers on our online platform.
                  </div>
                </div>
              </div>

              <div id="products">
                <h4 style={{ color: "#da9b3d" }}>Earning</h4>
                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 19)}>
                    <div>How do I withdraw from Rexhot? </div>
                  </a>

                  <div
                    className={`collapsible ${
                      this.state.current === 19 ? "open " : ""
                    }`}
                  >
                    While Eden’s plans run on a monthly schedule, we understand
                    // that it’s a significant lifestyle change for first-time
                    customers, // and so we offer the Eden Free trials, where we
                    let you ‘sample’ the plan you’re interested // in for a week
                    before you finally decide to kickstart your monthly
                    subscription.
                  </div>
                </div>

                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 20)}>
                    <div className="faq-toggle-body">
                      {" "}
                      What type of information is needed for withdrawal
                      verification?
                    </div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 20 ? "open " : ""
                    }`}
                  >
                    While we have a registered address and a physical office in
                    accordance with the corporate regulations of Nigeria, the
                    business we conduct is mainly online. This includes running
                    ads for our subscribers, and also connecting merchants and
                    purchasers on our online platform.
                  </div>
                </div>
                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 21)}>
                    <div> What charges are on withdrawal?</div>
                  </a>

                  <div
                    className={`collapsible ${
                      this.state.current === 21 ? "open " : ""
                    }`}
                  >
                    While Eden’s plans run on a monthly schedule, we understand
                    // that it’s a significant lifestyle change for first-time
                    customers, // and so we offer the Eden Free trials, where we
                    let you ‘sample’ the plan you’re interested // in for a week
                    before you finally decide to kickstart your monthly
                    subscription.
                  </div>
                </div>

                <div className="quests">
                  <a href="#nogo" onClick={this.toggle.bind(this, 22)}>
                    <div className="faq-toggle-body">
                      {" "}
                      How long to get money after requesting withdrawal
                    </div>
                  </a>
                  <div
                    className={`collapsible ${
                      this.state.current === 22 ? "open " : ""
                    }`}
                  >
                    While we have a registered address and a physical office in
                    accordance with the corporate regulations of Nigeria, the
                    business we conduct is mainly online. This includes running
                    ads for our subscribers, and also connecting merchants and
                    purchasers on our online platform.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="support">
            <h3>Any Questions?</h3>
            <h5>Contact support for assistance.</h5>
            <button>
              <span>
                <i style={{ padding: "10px" }} className="fa fa-phone"></i>
              </span>
              Contact us
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Faq;

// REFERRAL PROGRAM
// How does it work?

// How do I get paid?

// How do I start?

// Can users change the account that referred them?
