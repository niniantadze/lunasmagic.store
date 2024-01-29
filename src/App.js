import React from "react";
import logo from "./lunasmagic-logo.svg";
import "./App.css";
import { Hearts } from "react-loader-spinner";
import Navbar from "./Navbar";
export default function App() {
  return (
    <div className="App">
      {" "}
      <Navbar />
      <div class="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>Coming Soon...</h1>
          <Hearts
            height="200"
            width="150"
            color="white"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass="d-flex justify-content-center align-items-center"
            visible={true}
          />
        </header>
      </div>
    </div>
  );
}
