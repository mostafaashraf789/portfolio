import React from "react";
import "./contact.css";
import contactAnimation from "../Animation - 1699912986507.json";
import Lottie from "lottie-react";
import { useForm, ValidationError } from '@formspree/react';
import { Toaster ,toast } from "react-hot-toast";
import { useEffect } from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xdknlrrr");
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Your message has been sent successfully!");
    }
  }, [state.succeeded]);

  return (
    <section className="contact-us" id="contact">
      <Toaster position="top-center"/>
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
              <form onSubmit={handleSubmit}>
                <div className="mb-3 flex">
                  <label htmlFor="email" className="form-label">
                    Email address :
                  </label>
                  <input 
                  required
                  id="email" 
                  type="email" 
                  name="email" 
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-3 flex">
                  <label htmlFor="message" className="form-label">
                    Your message :
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button className="submit" type="submit" disabled={state.submitting}>submit</button>
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
