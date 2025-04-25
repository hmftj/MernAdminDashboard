import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdmStat = () => {
  const [stats, setStats] = useState(null);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IklidGVzYW0gVGFoaXIiLCJzdWIiOiI2ODAyMmEzMzI0YTFlNDYzYTVjNTE3YjEiLCJlbWFpbCI6ImlidGlzYW10YWhpcjEyM0BnbWFpbC5jb20iLCJpYXQiOjE3NDU1ODkyNDEsImV4cCI6MTc0NTY3NTY0MX0.hpPpz4ecxBh_U50iROYndqDtjMcxvz59PrHJ15qaNE4";

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://142.93.211.139/api/v1/admin/user-statistics", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStats(response.data);

      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) return <div className="text-center mt-5">Loading statistics...</div>;

  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5 className="card-title">Service Prov</h5>
              <p className="card-text fs-3">{stats.serviceProviders}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success">
            <div className="card-body">
              <h5 className="card-title">Customers</h5>
              <p className="card-text fs-3">{stats.customers}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-danger">
            <div className="card-body">
              <h5 className="card-title">Total Ordered Count</h5>
              <p className="card-text fs-3">{stats.totalOrdersCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmStat;
