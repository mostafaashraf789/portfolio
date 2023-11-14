import React from "react";
import "./contact.css";
import contactAnimation from "../Animation - 1699912986507.json";
import Lottie from "lottie-react";

export default function Contact() {
  return (
    <section className="contact-us">
      <h1>
        <span className="fa-solid fa-envelope me-4"></span>
        Contact Us
      </h1>
      <p>
        contact us for more information an get notified when i publish something
        new.
      </p>

      <div className="contaier">
        <div className="row ">
          <div className="col-sm-8 col-md-7 ">
            <div className="left-section    ">
              <form>
                <div className="mb-3 flex">
                  <label htmlFor="email" className="form-label">
                    Email address :
                  </label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    id="email"
                  />
                </div>
                <div className="mb-3 flex">
                  <label htmlFor="message" className="form-label">
                    Your message :
                  </label>
                  <textarea
                    required
                    className="form-control"
                    id="message"
                    rows="5"
                  ></textarea>
                </div>
                <button className="submit">submit</button>
              </form>
            </div>
          </div>
          <div className=" col-md-5  col-sm-4 ">
            <div className="animation-section ">
              <Lottie
                className="contactAnimation"
                animationData={contactAnimation}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
