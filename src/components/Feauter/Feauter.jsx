import React from "react";
import "./Feauter.scss";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Feauter = () => {
  return (
    <div className="featuer">
      <div className="left">
        <h1>A whole world of freelance talent at your fingertips</h1>
        <div className="item">
          <h2>
            <CheckCircleOutlineIcon className="icon" />
            <small> The best for every budget</small>
          </h2>
          <span>
            Find the right freelancer to begin working on your project within
            minutes.
          </span>
        </div>
        <div className="item">
          <h2>
            <CheckCircleOutlineIcon className="icon" />
            <small> Quality work done quickly</small>
          </h2>
          <span>
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </span>
        </div>
        <div className="item">
          <h2>
            <CheckCircleOutlineIcon className="icon" />
            <small> Protected payments, every time</small>
          </h2>
          <span>
            Always know what you'll pay upfront. Your payment isn't released
            until you approve the work.
          </span>
        </div>
        <div className="item">
          <h2>
            <CheckCircleOutlineIcon className="icon" />
            <small> 24/7 support</small>
          </h2>
          <span>
            Questions? Our round-the-clock support team is available to help
            anytime, anywhere.
          </span>
        </div>
      </div>
      <div className="right">right</div>
    </div>
  );
};

export default Feauter;
