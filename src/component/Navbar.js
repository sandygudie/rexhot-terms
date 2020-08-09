import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <React.Fragment>
      <section>
        <div className="nav">
          <div className="navbar ">
            <img
              class="logo"
              src="https://res.cloudinary.com/nairahot/image/upload/v1590588286/hotnaira_jjzxrj_oln3rl.png"
              alt="images"
            />

            <div class="logoimage">
              <img
                src="https://res.cloudinary.com/nairahot/image/upload/v1590591233/RexHot_logooo_tswv8s.png"
                width="100"
              />
            </div>

            <div className="login">
              <a href="#">Sign Up |</a>
              <a href="#">Login</a>
            </div>
          </div>
        </div>

        <div className="navlink">
          <ul>
            <Link to="/" className="nav-link">
              <li>About</li>
            </Link>

            <Link to="/getstarted" className="nav-link">
              <li> Get started</li>
            </Link>

            <Link to="/terms" className="nav-link">
              <li>Terms</li>
            </Link>

            <Link to="/faq" className="nav-link">
              <li>FAQs</li>
            </Link>
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
}
