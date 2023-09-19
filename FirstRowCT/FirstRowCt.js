import React from "react";
import "./FirstRowCt.css";
import { ImLink } from "react-icons/im";
import { FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";
function FirstRowCt() {
  return (
    <div>
      <header>
        <ul type="none" className="home">
          <li>Home / </li>
          <li>Hyderabad / </li>
          <li>Collections / </li>
          <li>15 Places for Exotic Cocktails</li>
        </ul>
      </header>
      <div className="barhomeimg">
        <div className="bgBarimage">
          <h1>15 Places for Exotic Cocktails</h1>
          <p>
            Head to these places for Iconic cocktails with a local twist and
            craziest ingredients. Absolutely worth the shot!
          </p>
          <p>15 Places</p>
        </div>
        <div className="topbgBar">
          <h5>
            <FaPlus color="white"></FaPlus>Save Collection
          </h5>
          <div className="linkimg">
            <IconContext.Provider value={{ className: "linkImg1" }}>
              <ImLink color="white"></ImLink>
            </IconContext.Provider>
          </div>
        </div>
        <div>
          <img
            src="https://b.zmtcdn.com/data/collections/282ef4935a46781f49d01327695c09fb_1674844520.jpg?output-format=webp&fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default FirstRowCt;
