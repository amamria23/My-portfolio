import "./Contact.css";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xyzgvyoz");
  return (
    <div className="contact-us">
      <h1 className="title">
        <span className="icon-envelope" />
        Contact us
      </h1>
      <p className="subtitle">
        contact us for more information and get notified when i publish somthing
        new
      </p>
      <div className="flex" style={{gap:'2rem'}}>
        <div className="left-section">
          <form
            action="https://formspree.io/f/xyzgvyoz"
            // @ts-ignore
            POST
            onSubmit={handleSubmit}
          >
            <div className="flex">
              <label htmlFor="email">Email Adress:</label>
              <input type="email" name="email" id="email" required />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div style={{ marginTop: "24px" }} className="flex">
              <label htmlFor="message">Your message:</label>
              <textarea id="message" name="message" required></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "submitting" : "submit"}
            </button>
            {state.succeeded && (
              <p
                className="flex"
                style={{
                  marginTop: "1.5rem",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                <Lottie
                  style={{ height: "55px" }}
                  // @ts-ignore
                  loop="off"
                  animationData={doneAnimation}
                />
                Your message has been sent successfuly!
              </p>
            )}
          </form>
        </div>
        <div className="animation">
          <Lottie animationData={contactAnimation} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
