import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Categories from "./Categories";
import Destination from "./Destination";
import Test from "./Testimonials";
import Sponsors from "./Sponsors";
import Contact from "./Contact";
import Trip from "./Trip";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Categories />
      <Destination />
      <Trip />
      <Test ></Test>
      <Sponsors />
      <Contact />
      <Footer />


    
     
    </div>
  );
}

export default App;
