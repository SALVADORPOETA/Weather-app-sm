import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineShopping, AiOutlineCustomerService, AiOutlineLogout } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { GoListOrdered } from 'react-icons/go';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { GiAztecCalendarSun } from 'react-icons/gi';
import './Sidebar.css';
import aztec from './assets/aztec5.jpg';

function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  const handleToggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className="top">
        <div className="logo">
          <GiAztecCalendarSun size="2rem" className='personal-logo' />
          <span>SalvadorMartinez</span>
        </div>
        <AiOutlineMenu className="menu-icon" color="white" size="1.5rem" cursor="pointer" onClick={handleToggleSidebar} />
      </div>
      <div className="user">
        <img src={aztec} alt="me" className="user-img" />
        <div className="name-role">
          <p className="bold">Daniel M.</p>
          <p>Admin</p>
        </div>
      </div>
      <ul>
        <li>
          <a href="#">
            <AiOutlineShopping size="1.5rem"/>
            <span className="nav-item">Products</span>
          </a>
          <span className="tooltip">Products</span>
        </li>
        <li>
          <a href="#">
            <BiCategoryAlt size="1.5rem" />
            <span className="nav-item">Categories</span>
          </a>
          <span className="tooltip">Categories</span>
        </li>
        <li>
          <a href="#">
            <GoListOrdered size="1.5rem" />
            <span className="nav-item">Orders</span>
          </a>
          <span className="tooltip">Orders</span>
        </li>
        <li>
          <a href="#">
            <AiOutlineCustomerService size="1.5rem" />
            <span className="nav-item">Customers</span>
          </a>
          <span className="tooltip">Customers</span>
        </li>
        <li>
          <a href="#">
            <MdOutlineLocalShipping size="1.5rem" />
            <span className="nav-item">Shipping</span>
          </a>
          <span className="tooltip">Shipping</span>
        </li>
        <li>
          <a href="#">
            <FiSettings size="1.5rem" />
            <span className="nav-item">Settings</span>
          </a>
          <span className="tooltip">Settings</span>
        </li>
        <li>
          <a href="#">
            <AiOutlineLogout size="1.5rem" />
            <span className="nav-item">Logout</span>
          </a>
          <span className="tooltip">Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
