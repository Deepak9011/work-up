import React, { useState } from 'react';

const RemoveCustomer = () => {
  const [email, setEmail] = useState('');
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    // Simple email regex to validate email format
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const fetchCustomerDetails = async () => {
    // Check if the email format is valid
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');
    setCustomer(null);

    try {
      const res = await fetch('https://workup.koyeb.app/customers/getCustomerDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Customer not found');

      const data = await res.json();
      setCustomer(data);
    } catch (err) {
      setError(err.message || 'Error fetching customer');
    } finally {
      setLoading(false);
    }
  };

  const removeCustomer = async () => {
    if (!customer) return; // Ensure customer is available

    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://workup.koyeb.app/customers/removeCustomer', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: customer.email }), // Or use UUID if needed
      });

      if (!res.ok) throw new Error('Error removing customer');

      setCustomer(null); // Clear customer details after removal
      alert('Customer removed successfully');
    } catch (err) {
      setError(err.message || 'Error removing customer');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Remove Customer</h2>
      <input
        type="email"
        placeholder="Enter customer email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '8px', marginRight: '10px', width: '300px' }}
        disabled={loading} // Disable input while loading
      />
      <button
        onClick={fetchCustomerDetails}
        style={{ padding: '8px 16px' }}
        disabled={loading} // Disable button while loading
      >
        {loading ? 'Fetching...' : 'Fetch'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {customer && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px' }}>
          <img src={customer.imgUrl} alt="Profile" width="100" height="100" style={{ borderRadius: '8px' }} />
          <h3>{customer.firstName} {customer.middleName} {customer.lastName}</h3>
          <p><strong>Phone:</strong> {customer.phoneNumber}</p>
          <p><strong>Religion:</strong> {customer.religion}</p>
          <p><strong>Address:</strong> {customer.addressLine1}, {customer.addressLine2}</p>
          <p><strong>City:</strong> {customer.city}</p>
          <p><strong>State:</strong> {customer.state}</p>
          <p><strong>Zip Code:</strong> {customer.zipCode}</p>
          <p><strong>UUID:</strong> {customer.uuid}</p>

          {/* Button to remove the customer */}
          <button
            onClick={removeCustomer}
            style={{ marginTop: '20px', padding: '8px 16px', backgroundColor: 'red', color: 'white' }}
            disabled={loading} // Disable while loading
          >
            {loading ? 'Removing...' : 'Remove Customer'}
          </button>
        </div>
      )}
    </div>
  );
};

export default RemoveCustomer;
