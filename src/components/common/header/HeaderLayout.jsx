import React from 'react';
import * as FaIcons from 'react-icons/fa';
import './HeaderLayout.scss';

const HeaderLayout = () => {
  return (
    <div className="header-layout">
      <h2>Overview</h2>
      <FaIcons.FaUser className="user-icon" size={24} />
    </div>
  );
};

export default HeaderLayout;