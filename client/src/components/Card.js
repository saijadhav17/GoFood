import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div className="card" style={{ width: "20rem", maxHeight: "560px" }}>
          <img src="https://source.unsplash.com/random/100x100/?food" className="card-img-top m-20" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some important TEXT...!</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded ">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
