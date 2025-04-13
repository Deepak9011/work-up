import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { getAllBids } from '../../utils/biddedApi';

function AllBids(props) {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const bidData = [
        {
          "bidId": "67f21bb7bcdcdc16621572ce",
          "customerId": "cust123",
          "serviceProviderId": "provider456",
          "startBidTime": "2023-06-15T03:30:00",
          "endBidTime": "2023-06-20T11:30:00",
          "serviceTime": "2023-06-25T04:30:00",
          "category": "Plumbing",
          "description": "Fix leaking kitchen sink",
          "maxAmount": 150.0,
          "address": "123 Main St",
          "state": "California",
          "country": "USA",
          "additionalNotes": "Available on weekends",
          "image": {
            "image5": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image3": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image4": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image1": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image2": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            }
          },
          "bidStatus": "Open",
          "conformCustomerId": "cust123"
        },
        {
          "bidId": "67f21c15bcdcdc16621572d0",
          "customerId": "cust123",
          "serviceProviderId": "provider456",
          "startBidTime": "2023-06-15T03:30:00",
          "endBidTime": "2023-06-20T11:30:00",
          "serviceTime": "2023-06-25T04:30:00",
          "category": "Plumbing",
          "description": "Fix leaking kitchen sink",
          "maxAmount": 150.0,
          "address": "123 Main St",
          "state": "California",
          "country": "USA",
          "additionalNotes": "Available on weekends",
          "image": {
            "image5": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image3": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image4": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image1": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image2": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            }
          },
          "bidStatus": "Open",
          "conformCustomerId": "cust123"
        },
        {
          "bidId": "67f21e4cb1e33c3582993bad",
          "customerId": "cust123",
          "serviceProviderId": "provider456",
          "startBidTime": "2023-06-15T03:30:00",
          "endBidTime": "2023-06-20T11:30:00",
          "serviceTime": "2023-06-25T04:30:00",
          "category": "Plumbing",
          "description": "Fix leaking kitchen sink",
          "maxAmount": 150.0,
          "address": "123 Main St",
          "state": "California",
          "country": "USA",
          "additionalNotes": "Available on weekends",
          "image": {
            "image5": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
               "imageData": "sfdsfs"
            },
            "image3": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image4": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image1": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image2": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            }
          },
          "bidStatus": "Open",
          "conformCustomerId": "cust123"
        },
        {
          "bidId": "67f21e4db1e33c3582993bae",
          "customerId": "cust123",
          "serviceProviderId": "provider456",
          "startBidTime": "2023-06-15T03:30:00",
          "endBidTime": "2023-06-20T11:30:00",
          "serviceTime": "2023-06-25T04:30:00",
          "category": "Plumbing",
          "description": "Fix leaking kitchen sink",
          "maxAmount": 150.0,
          "address": "123 Main St",
          "state": "California",
          "country": "USA",
          "additionalNotes": "Available on weekends",
          "image": {
            "image5": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image3": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image4": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image1": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image2": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            }
          },
          "bidStatus": "Open",
          "conformCustomerId": "cust123"
        },
        {
          "bidId": "67f21e4eb1e33c3582993baf",
          "customerId": "cust123",
          "serviceProviderId": "provider456",
          "startBidTime": "2023-06-15T03:30:00",
          "endBidTime": "2023-06-20T11:30:00",
          "serviceTime": "2023-06-25T04:30:00",
          "category": "Plumbing",
          "description": "Fix leaking kitchen sink",
          "maxAmount": 150.0,
          "address": "123 Main St",
          "state": "California",
          "country": "USA",
          "additionalNotes": "Available on weekends",
          "image": {
            "image5": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image3": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
              "image4": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image1": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image2": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            }
          },
          "bidStatus": "Open",
          "conformCustomerId": "cust123"
        },
        {
          "bidId": "67f279d6e2763538518dc313",
          "customerId": "deepak123",
          "serviceProviderId": "deepakprovider456",
          "startBidTime": "2025-06-15T09:00:00",
          "endBidTime": "2025-06-20T17:00:00",
          "serviceTime": "2025-06-25T10:00:00",
          "category": "Gardendin",
          "description": "Cutting",
          "maxAmount": 370.0,
          "address": "vallab Nagar, Indore",
          "state": "Madhya Pradesh",
          "country": "India",
          "additionalNotes": "Available on weekends only sunday",
          "image": {
            "image5": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image3": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image4": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image1": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            },
            "image2": {
              "imageName": "leak.jpg",
              "imageType": "image/jpeg",
              "imageData": "sfdsfs"
            }
          },
          "bidStatus": "Open",
          "conformCustomerId": null
        },
        {
          "bidId": "67f9caae1fc2300bf68378bf",
          "customerId": "cust123deepak",
          "serviceProviderId": "provider456",
          "startBidTime": "2025-04-15T09:00:00",
          "endBidTime": "2025-04-20T17:00:00",
          "serviceTime": "2025-04-25T10:30:00",
          "category": "Plumbing",
          "description": "Fix leaking sink and replace pipe",
          "maxAmount": 200.0,
          "address": "123 Green Lane",
          "state": "California",
          "country": "USA",
          "additionalNotes": "Please bring spare parts.",
          "image": {},
          "bidStatus": "Open",
          "conformCustomerId": null
        },
        {
          "bidId": "67f9cd1b1fc2300bf68378c0",
          "customerId": "cust123deepak",
          "serviceProviderId": "provider456",
          "startBidTime": "2025-04-12T00:00:00",
          "endBidTime": "2025-04-13T00:00:00",
          "serviceTime": "2025-04-30T00:00:00",
          "category": "Electrical",
          "description": "xgit",
          "maxAmount": 25.0,
           "address": "vallab",
          "state": "Uttar Pradesh",
          "country": "India",
          "additionalNotes": "ggjj",
          "image": {},
          "bidStatus": "Close",
          "conformCustomerId": null
        },
        {
          "bidId": "67f9d4e1a577db4820e50f09",
          "customerId": "cust123deepak",
          "serviceProviderId": "provider456",
          "startBidTime": "2025-04-22T00:00:00",
          "endBidTime": "2025-04-30T00:00:00",
          "serviceTime": "2025-04-23T00:00:00",
          "category": "Painting",
          "description": "uxjyxjy",
          "maxAmount": 58.0,
          "address": "xujttj",
          "state": "Maharashtra",
          "country": "India",
          "additionalNotes": "xyut",
          "image": {},
          "bidStatus": "Open",
          "conformCustomerId": null
        },
        {
          "bidId": "67f9ecb1671fc767a327d7bf",
          "customerId": "cust123deepak",
          "serviceProviderId": "provider456",
          "startBidTime": "2025-04-12T00:00:00",
          "endBidTime": "2025-04-12T00:00:00",
          "serviceTime": "2025-04-12T00:00:00",
          "category": "Cleaning",
          "description": "deepak",
          "maxAmount": 45.0,
          "address": "sgsits",
          "state": "Madhya Pradesh",
          "country": "India",
          "additionalNotes": "",
          "image": {},
          "bidStatus": "Open",
          "conformCustomerId": null
        },
        {
          "bidId": "67f9fa4f671fc767a327d7c3",
          "customerId": "cust123deepak",
          "serviceProviderId": "provider456",
          "startBidTime": "2025-04-13T00:00:00",
          "endBidTime": "2025-04-14T00:00:00",
          "serviceTime": "2025-04-15T00:00:00",
          "category": "Electrical",
          "description": "cooler",
          "maxAmount": 56.0,
          "address": "vallab nagar",
          "state": "Madhya Pradesh",
          "country": "India",
          "additionalNotes": "bsbb",
          "image": {},
          "bidStatus": "Open",
          "conformCustomerId": null
        }
      ];
    // getAllBids(setBids);
    // console.log(bids + "hello" + {bids})
    setBids(bidData);
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Available Bids</h1>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bids.map((bid) => (
                <tr key={bid.bidId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600">{bid.category}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700 max-w-xs truncate">{bid.description}</div>
                    {bid.additionalNotes && (
                      <div className="text-xs text-gray-500 mt-1">Notes: {bid.additionalNotes}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-700">${bid.maxAmount}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700">
                      {bid.address}, {bid.state}, {bid.country}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-700">{formatDate(bid.serviceTime)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${bid.bidStatus === 'active' ? 'bg-green-100 text-green-800' : 
                        bid.bidStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {bid.bidStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="flex items-center text-blue-600 hover:text-blue-900">
                      View <FiChevronRight className="ml-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllBids;