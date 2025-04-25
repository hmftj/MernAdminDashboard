import React from 'react';
import * as FaIcons from 'react-icons/fa';
import './Home.scss';
import CustomTable from './../../common/custom-table/CustomTable';
import AdmStat from '../customers/AdmStat';
import Users from '../customers/Users';





const Home = () => {

  return (
    <div className="home-container">
      {/* <div className="dashboard">
        <div className="heading">Dashboard</div>
        <div className="cards">
          <div className="card">
            <div className="icon"><FaIcons.FaUserCog /></div>
            <div className="text">Service providers</div>
          </div>
          <div className="card">
            <div className="icon"><FaIcons.FaUsers /></div>
            <div className="text">Active Customers</div><br/>
           
          </div>
          <div className="card">
            <div className="icon"><FaIcons.FaClipboardList /></div>
            <div className="text">Total Orders</div>
          </div>
        </div>
      </div>
      <div className="table-details">
        <div className="heading">Customers</div>
        <CustomTable columns={columns} dataSource={data} loading={false} />
      </div>
      <div className="table-details">
        <div className="heading">Orders</div>
        <CustomTable columns={columns} dataSource={data} loading={false} />
      </div>
       */}
<AdmStat></AdmStat>

<Users></Users>

    </div>
  );
};

export default Home;