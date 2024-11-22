import React, { useState } from 'react';
import AddCategories from '../components/categories/AddCategories';
import AddSubCategory from '../components/categories/AddSubCategories';
import AddTask from '../components/categories/AddTask';
import AllCategories from '../components/categories/AllCategories';
import UpdateCategory from '../components/categories/UpdateCategory';
import AllCustomers from '../components/customer/AllCustomer';
import RemoveCustomer from '../components/customer/RemoveCustomer';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import AllServiceProviders from '../components/service_provider/AllServiceProvider';
import RemoveServiceProvider from '../components/service_provider/RemoveServiceProvider';
import SlideBar from '../components/SlideBar';
import Dashboard from './DashBoard';

function Home() {

    const [selected, setSelected] = useState('dashboard');

    const renderContent = () => {
        switch (selected) {
            case 'dashboard':
                return <Dashboard />;
            case 'allCategories':
                return <AllCategories />
            case 'addCategories':
                return <AddCategories/>
            case 'addSubCategories':
                return <AddSubCategory/>
            case 'addTask':
                return <AddTask/>
            case 'updateCategory':
                return <UpdateCategory/>
            case 'allServiceProviders':
                return <AllServiceProviders/>
            case 'removeServiceProvider':
                return <RemoveServiceProvider/>
            case 'allCustomers':
                return <AllCustomers/>
            case 'removeCustomer':
                return <RemoveCustomer/>
            default:
                return <Dashboard />;
        }
    };


    return (
        <div className="container-fluid">
            <NavBar/>
            <div className="row">
                <div className="sidebar col-md-3">
                    <SlideBar onSelect={setSelected} />
                </div>
                <main className="col-md-9">
                    {/* <h1>Hello</h1> */}
                    {renderContent()}
                </main>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;