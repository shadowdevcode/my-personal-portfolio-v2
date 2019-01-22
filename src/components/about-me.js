import React from "react";
import "./about-me.css";
import Img from "gatsby-image";

const AboutMe = ({ profileImg }) => {
  return (
    <section id="about" className="section">
      <h2 className="text-center">ABOUT ME</h2>
      <div className="section-content">
        <div className="row">
          <div className="col-12 col-sm-12 offset-sm-1 col-md-6 offset-md-0 col-lg-4 offset-lg-2">
            <Img
              title="Profile image"
              alt="Small Image of Vijay"
              sizes={profileImg.sizes}
              className="img-fluid float-center"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <h3>What I hope to do</h3>
            <p>
              My mission & passion as a developer is to contribute to applications that
              empower, motivate & bring change in lives of people. I believe
              that through code we can make the world a better place by
              building products.
              <br/>
              Yes, let's change the world together!
            </p>
            <h4>More About Myself</h4>
            <p>
              I am a Tech-Savvy person. On my free time, I read tech blogs, quora,
              Medium, etc & take online courses in order to help me develop a
              growing mindset and become a better developer.
            </p>
            <p>
              I relish the thrill of learning new coding languages and sharing
              with others my insights.Throughout this journey, I have learnt to
              stay calm and be positive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
