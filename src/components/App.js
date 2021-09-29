import React from "react";
import "./App.css";
import Header from "./Header";
import DismissableBlock from "./DismissableBlock";
import Form from "./Form";
import Footer from "./Footer";

const App = () => {
  return (
    <React.Fragment>
      <div className="parallax">
        <Header />
      </div>
      <div className="mainBox">
        <div className="container">
          <DismissableBlock />
          <h2>Enter Your Birthdate and lucky number to continue...</h2>
          <Form />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
