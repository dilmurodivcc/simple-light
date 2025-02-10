import "./scss/main.scss";
import { useState } from "react";

import {
  PrimaryBtn,
  SecondaryBtn,
  TertiaryBtn,
  QuaternaryBtn,
} from "./components/Button";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Trusted from "./components/Trusted"; 
import Form from "./components/Form";


function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
      </div>
      <Explore />
      <Cards />
      <div className="container">
        <Trusted />
        <Form/>

      </div>
    </>
  );
}
export default App;
