import React, { useState } from 'react';
import GetAllBids from '../components/bid/GetAllBids';
import AddCategories from '../components/categories/AddCategories';
import AddSubCategory from '../components/categories/AddSubCategories';
import AddTask from '../components/categories/AddTask';
import AllSubCategories from '../components/categories/AllSubCategories';
import UpdateCategory from '../components/categories/UpdateCategory';
import AllCustomers from '../components/customer/AllCustomer';
import RemoveCustomer from '../components/customer/RemoveCustomer';
// import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import AllServiceProviders from '../components/service_provider/AllServiceProvider';
import RemoveServiceProvider from '../components/service_provider/RemoveServiceProvider';
import SlideBar from '../components/SlideBar';
import Dashboard from './DashBoard';
import Categories from '../components/categories/Categories';



function Home() {

    const [selected, setSelected] = useState('dashboard');

    const renderContent = () => {
        switch (selected) {
            case 'dashboard':
                return <Dashboard />;
            case 'allCategories':
                return <Categories/>
                // return <AllCategories />
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
            case 'getAllBid':
                return <GetAllBids/>
            default:
                return <Dashboard />;
        }
    };

    const sampleBidData = {
        bidId: 'BID12345',
        serviceProviderid: 'SP98765',
        startBidTime: '2023-05-15T09:00:00',
        endBidTime: '2023-05-20T17:00:00',
        serviceTime: '2023-05-25T10:00:00',
        category: 'Plumbing',
        description: 'Fix leaking pipes in kitchen',
        maxAmount: 250.00,
        address: '123 Main St, Anytown, USA',
        additionalNotes: 'Need to be done before noon',
        image: {
          img1: { url: '/images/pipe-leak.jpg', altText: 'Leaking pipe' },
          img2: { url: '/images/kitchen-sink.jpg', altText: 'Kitchen area' }
        },
        status: 'active'
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
            {/* <AllSubCategories/> */}
            {/* <BidCreatedDetails bidData={sampleBidData} /> */}
            {/* <Footer/> */}
        </div>
    );
}

export default Home;