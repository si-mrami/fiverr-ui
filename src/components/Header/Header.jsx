import React from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import im from "../../assets/rTkJ7v-man-png-image.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <div className="tetle">
            <h1>
              Find the perfect <span> freelance </span> <br /> services for your
              business
            </h1>
          </div>
          <div className="search">
            <div className="search-content">
              <SearchIcon style={{ color: "#808080" }} />
              <input type="text" placeholder='Try "bulding mobile app"' />
              <div className="btn-search">Search</div>
            </div>
          </div>
          <div className="list_btn">
            <p>Popular: </p>
            <button>Website Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={im} alt="" />
        </div>
      </div>
      <div className="menu">
        <span>Trusted by:</span>
        <span>FACEBOOK</span>
        <span>GOOGLE</span>
        <span>NETFLIX</span>
        <span>P&G</span>
        <span>PayPal</span>
      </div>
    </div>
  );
};

export default Header;
