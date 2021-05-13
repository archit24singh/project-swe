import React from "react"
import author from "../about.png";

const About = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                  <img className="profile-img" src={author} alt="author..."/> 
                  </div> 
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Us</h1>
                    <p>
                        <h1>Let’s discuss on how to improve your skills</h1>
                        Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.
                    </p>
                    <p>
                        <h1>We can help you to grow your skill sets</h1>
                        Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
