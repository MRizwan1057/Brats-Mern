import React from "react";
// import Card from "./Components/Card";
// import Chart from "./Components/Chart";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="container-fluid" id="main">
          <div className="row row-offcanvas row-offcanvas-left">
            <Sidebar />
            <Dashboard />
            {/* <Chart /> */}
            {/* <Card /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
