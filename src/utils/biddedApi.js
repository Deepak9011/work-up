import { BIDDED_URL } from "./constants";

export async function createBid(setState, bidData) {
    try {
      const url = BIDDED_URL + `/bids/create`;
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bidData)
      });
  
      const data = await response.json();
      console.log("Bid Created:", data);
      setState(data);
    } catch (err) {
      console.error("Error creating bid:", err);
    }
  }
  
  export async function getAllBids(setState) {
    try {
      const url = BIDDED_URL + `/bids`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("All Bids:", data);
      setState(data);
    } catch (err) {
      console.error("Error fetching all bids:", err);
    }
  }
  
  export async function getBidById(setState, bidId) {
    try {
      const url = BIDDED_URL + `/bids/bid/${bidId}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("Bid by ID:", data);
      setState(data);
    } catch (err) {
      console.error(`Error fetching bid with ID ${bidId}:`, err);
    }
  }
  
  export async function getBidsByCustomer(setState, customerId) {
    try {
      const url = BIDDED_URL + `/bids/customer/${customerId}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("Bids by Customer:", data);
      setState(data);
    } catch (err) {
      console.error(`Error fetching bids for customer ${customerId}:`, err);
    }
  }
  
  export async function deleteBidById(setState, bidId) {
    try {
      const url = BIDDED_URL + `/bids/bid/${bidId}`;
      const response = await fetch(url, {
        method: 'DELETE'
      });
  
      const data = await response.json();
      console.log(`Bid with ID ${bidId} deleted.`, data);
      setState(data);
    } catch (err) {
      console.error(`Error deleting bid with ID ${bidId}:`, err);
    }
  }
  