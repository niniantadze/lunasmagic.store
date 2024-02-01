import React from "react";
import AniHomePage from "./71378579_10211965419210867_743412242837405696_n.jpg";
import "./HomepageContent.css";
export default function HomepageContent() {
  return (
    <div className="HomepageContent">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6">
            <img
              src={AniHomePage}
              alt="founder-of-lunasmagicstore"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-4 text-align pt-6 about-text">
            🌙აღმოაჩინე @mylunastories ჯადოსნური საჩუქრები ზღაპრულ სივრცეში🔮
            🧝🏽‍♂️ჩვენი ჯადოქარი 🧹მოფრინდება ნებისმიერ ლოკაციაზე სულის ჩამდგმელი:
            @mylunastories{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
