import React from "react";
import Header from "./header";
import Footer from "./footer";
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <div>
      <Header />
      <main>{<practicing />}</main>
      <Footer />
    </div>
  );
};

export default App;
