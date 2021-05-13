import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
      <div className="header-wrapper">
          <div className="main-info">
              <h1>Welome To ABC library</h1>
              <Typed
              className="typed-text"
              strings={["Hi there" , "Browse whatever you like" , "Free Library" , "Membership"]}
              typeSpeed={40}
              backSpeed={50}
              loop
              />
              <a href="#" className="btn-main-offer">contact us</a>
          </div>
      </div>
    )
}

export default Header
