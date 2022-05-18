import { Dashboard } from "@mui/icons-material";
import React from "react";
import Chart from "./Components/Chart";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <div>
        Salaam
        <Navbar />
        <div className="container-fluid" id="main">
          <div className="row row-offcanvas row-offcanvas-left">
            <Sidebar />
            <Dashboard />
            {/* <Chart /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
