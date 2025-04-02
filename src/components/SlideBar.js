import React, { useState } from 'react';
import './SlideBar.css';

function SlideBar(props) {
  const [active, setActive] = useState(''); 

  const handleClick = (item) => {
    props.onSelect(item)
    setActive(item);
  };

  return (
    <div className="sidebar">
      <ul>
        <li
          className={active === 'dashboard' ? 'active' : ''}
          onClick={() => handleClick('dashboard')}
        >
          <a>Dashboard</a>
        </li>
      </ul>

      <h6>Categories</h6>
      <ul>
        <li
          className={active === 'allCategories' ? 'active' : ''}
          onClick={() => handleClick('allCategories')}
        >
          <a>Show All Categories</a>
        </li>
        <li
          className={active === 'addCategories' ? 'active' : ''}
          onClick={() => handleClick('addCategories')}
        >
          <a>Add Categories</a>
        </li>
        <li
          className={active === 'addSubCategories' ? 'active' : ''}
          onClick={() => handleClick('addSubCategories')}
        >
          <a>Add SubCategories</a>
        </li>
        <li
          className={active === 'addTask' ? 'active' : ''}
          onClick={() => handleClick('addTask')}
        >
          <a>Add Task</a>
        </li>
        <li
          className={active === 'updateCategory' ? 'active' : ''}
          onClick={() => handleClick('updateCategory')}
        >
          <a>Update Category</a>
        </li>
      </ul>

      <h6>Service Provider</h6>
      <ul>
        <li
          className={active === 'allServiceProviders' ? 'active' : ''}
          onClick={() => handleClick('allServiceProviders')}
        >
          <a>Show All Service Providers</a>
        </li>
        <li
          className={active === 'removeServiceProvider' ? 'active' : ''}
          onClick={() => handleClick('removeServiceProvider')}
        >
          <a>Remove Service Provider</a>
        </li>
      </ul>

      <h6>Customer</h6>
      <ul>
        <li
          className={active === 'allCustomers' ? 'active' : ''}
          onClick={() => handleClick('allCustomers')}
        >
          <a>Show All Customers</a>
        </li>
        <li
          className={active === 'removeCustomer' ? 'active' : ''}
          onClick={() => handleClick('removeCustomer')}
        >
          <a>Remove Customer</a>
        </li>
      </ul>

      <h6>Bid</h6>
      <ul>
        <li
          className={active === 'getAllBid' ? 'active' : ''}
          onClick={() => handleClick('Get All Bid')}
        >
          <a>Get All Bids</a>
        </li>
        <li
          className={active === 'serviceProviderBid' ? 'active' : ''}
          onClick={() => handleClick('serviceProviderBid')}
        >
          <a>Service Provider Total Bid</a>
        </li>
      </ul>
    </div>
  );
}

export default SlideBar;
