import React from "react";

const Reviews = () => {
  return (
    <section id="reviews" className="py-5" style={{ backgroundColor: "#f3cee9ff" }}>
      <div className="container">
        <h2 className="text-center mb-5">What People Say</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p>"The event was well-organized and very inspiring."</p>
                <h6 className="mt-3 mb-0">— Anitha R</h6>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p>"Amazing speakers and great networking opportunities."</p>
                <h6 className="mt-3 mb-0">— Karthik S</h6>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p>"One of the best events I have attended so far."</p>
                <h6 className="mt-3 mb-0">— Priya M</h6>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
