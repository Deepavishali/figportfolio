import React, { useState } from "react";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "react-toastify/dist/ReactToastify.css";
//import ScreenHeading from "../../utilities/screenHeading.js";



export default function ContactMe(props) {
  const notify = () => {
    toast.success("Thank you for your interest! I will be in touch with you shortly.", {
      position: "top-right",
    });
  };

  const [showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_47o1m4k",
        "template_1jds6ze",
        e.target,
        "-eHPVnPVqx-4WkN3r"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <section id="contactme">
      <div id={props.id || ""}>
        <div className="main-container">
          <div className="heading">
            <h1 className="con-h1">Contact Me</h1>
            <p className="con-p">let's keep in touch</p>
          </div>
          <div className="contactme-container">

            <div className="container-parent">
              <div className="container">
                <div className="contactinfo">
                  <div className="box">
                    <div className="icon">
                    <FontAwesomeIcon icon={faLocationDot} bounce />
                    </div>
                    <div className="text">
                      <h3>Location</h3>
                      <p>Madurai-Tamilnadu</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="icon">
                    <FontAwesomeIcon icon={faPhoneVolume} fade />
                    </div>
                    <div className="text">
                      <h3>Phone</h3>
                      <p>+91 8681921906</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="icon">
                      <FontAwesomeIcon icon={faGithub} spin />
                    </div>
                    <div className="text">
                      <h3>Github</h3>
                      <a
                        href="https://github.com/Deepavishali"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        https://github.com/Deepavishali
                      </a>
                    </div>
                  </div>


                  <div className="box">
                    <div className="icon">
                     <FontAwesomeIcon icon={faLinkedin} flip/>
                    </div>
                    <div className="text">
                      <h3>LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/deepa-vishali-g-368b59272/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        https://www.linkedin.com/in/deepa-vishali-g-368b59272/
                      </a>
                    </div>
                  </div>

                  <div className="box">
                    <div className="icon">
                      <FontAwesomeIcon icon={faEnvelope} shake/>
                    </div>
                    <div className="text">
                      <h3>Email</h3>
                      <p>deepavishalig@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="contactform">
                  <form action="" onSubmit={sendEmail}>
                    <h2>Send Message</h2>

                    <div className="inputbox">
                      <input type="text" name="from_name" required="required" />
                      <span>Full Name</span>
                    </div>

                    <div className="inputbox">
                      <input type="text" name="email" required="required" />
                      <span>Email</span>
                    </div>

                    <div className="inputbox">
                      <textarea name="message" required="required"></textarea>
                      <span>Your Message..</span>
                    </div>

                    <div className="inputbox">
                      <input
                        type="submit"
                        onClick={notify}
                        name=""
                        value="Send"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
}