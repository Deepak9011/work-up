import React, { useState } from 'react';

const ServiceProviderDetails = () => {
  const [sID, setSID] = useState('');
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProvider = async () => {
    if (!sID) {
      setError('Please enter a valid service provider ID');
      return;
    }

    setLoading(true);
    setError('');
    setProvider(null);

    try {
      const res = await fetch('https://workup.koyeb.app/customers/getServiceProviderData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sID }),
      });

      if (!res.ok) throw new Error('Service provider not found');

      const data = await res.json();
      setProvider(data);
    } catch (err) {
      setError(err.message || 'Error fetching provider');
    } finally {
      setLoading(false);
    }
  };

  const removeProvider = () => {
    setProvider(null);
    setSID('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Get Service Provider Info</h2>
      <input
        type="text"
        placeholder="Enter Service Provider ID"
        value={sID}
        onChange={(e) => setSID(e.target.value)}
        style={{ padding: '8px', marginRight: '10px', width: '300px' }}
        disabled={loading}
      />
      <button onClick={fetchProvider} disabled={loading} style={{ padding: '8px 16px' }}>
        {loading ? 'Loading...' : 'Fetch'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {provider && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px' }}>
          <img
            src={provider.imgURL}
            alt="Service Provider"
            width="100"
            height="100"
            style={{ borderRadius: '8px' }}
          />
          <h3>{provider.sName}</h3>
          <p><strong>Rating:</strong> {provider.rating} ⭐</p>
          <p><strong>Reviews:</strong> {provider.reviews}</p>
          <p><strong>Info:</strong> {provider.info}</p>
          <p><strong>Starting Price:</strong> ₹{provider.startingPrice}</p>
          <p><strong>Category:</strong> {provider.category}</p>
          <p><strong>Orders Completed:</strong> {provider.ordersCompleted}</p>
          <p><strong>New Provider:</strong> {provider.newSProvider ? 'Yes' : 'No'}</p>
          <p><strong>Away:</strong> {provider.away} km</p>
          <p><strong>Saved:</strong> {provider.saved ? 'Yes' : 'No'}</p>
          <p><strong>Service ID:</strong> {provider.sID}</p>

          <button onClick={removeProvider} style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: 'red', color: 'white', border: 'none' }}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceProviderDetails;
