import React from "react";
import "./App.css";
import HomepageContent from "./HomepageContent";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="App">
      {" "}
      <Navbar />
      <div class="container">
        <header className="App-header">
          <HomepageContent />
        </header>
      </div>
    </div>
  );
}
