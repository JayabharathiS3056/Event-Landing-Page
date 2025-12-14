import React from "react";
import eventImg from "../assets/event.jfif";

const Hero = () => {
  return (
    <section
      id="home"
      className="vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${eventImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="card p-4 shadow-lg" style={{ backgroundColor: "#f3cee9ff", width: "380px" }}>
        <h3 className="text-center mb-3">Register for Event</h3>

        <input className="form-control mb-2" placeholder="Full Name" />
        <input className="form-control mb-2" placeholder="Email Address" />
        <input className="form-control mb-2" placeholder="Phone Number" />

        <select className="form-control mb-3">
          <option>Select Event Type</option>
          <option>Workshop</option>
          <option>Conference</option>
          <option>Meetup</option>
        </select>

        <button className="btn btn-primary w-100">Register Now</button>
      </div>
    </section>
  );
};

export default Hero;
