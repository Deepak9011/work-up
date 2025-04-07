import React, { useEffect, useState } from 'react';
import { getAllBids } from '../../utils/biddedApi';

const GetAllBids = () => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    getAllBids(setBids);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Bids</h2>
      {bids.length === 0 ? (
        <p>No bids available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bids.map((bid) => (
            <div key={bid.bidId} className="border rounded-2xl p-4 shadow-md">
              <h3 className="text-lg font-semibold mb-2">{bid.category}</h3>
              <p><strong>Description:</strong> {bid.description}</p>
              <p><strong>Max Amount:</strong> ${bid.maxAmount}</p>
              <p><strong>Service Time:</strong> {new Date(bid.serviceTime).toLocaleString()}</p>
              <p><strong>Address:</strong> {bid.address}, {bid.state}, {bid.country}</p>
              <p><strong>Status:</strong> {bid.bidStatus}</p>
              <p><strong>Customer ID:</strong> {bid.customerId}</p>
              <p><strong>Service Provider ID:</strong> {bid.serviceProviderId}</p>
              <p><strong>Notes:</strong> {bid.additionalNotes}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetAllBids;
