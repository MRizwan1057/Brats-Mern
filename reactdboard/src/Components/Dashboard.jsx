import { useEffect, useState } from "react";
import Chart from "./Chart";

const Dashboard = () => {
  const [record, setRecord] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="col main pt-5 mt-3">
      <div className="row mb-3">
        <div className="col-xl-6 col-sm-6 py-2">
          <div className="card bg-light text-white h-100">
            <div className="card-body" style={{ backgroundColor: "purple" }}>
              <div className="rotate"></div>
              <h6 className="text-uppercase">Asset Delisting Update</h6>
              <button className="btn btn-secondaery bg-warning">
                Find out More
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Dashboard;
