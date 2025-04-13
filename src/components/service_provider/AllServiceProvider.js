import React, { useState } from 'react';

const AllServiceProvider = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');

  const fetchProviders = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://workup.koyeb.app/customers/getServiceProviders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, category }),
      });

      if (!res.ok) throw new Error('Failed to fetch service providers');
      const data = await res.json();
      setProviders(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f7f9fc' }}>
      <h2 style={{ marginBottom: '20px' }}>Service Providers</h2>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        marginBottom: '25px',
        background: '#fff',
        padding: '15px 20px',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            minWidth: '200px'
          }}
        />
        <input
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            minWidth: '200px'
          }}
        />
        <button
          onClick={fetchProviders}
          style={{
            padding: '10px 18px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
        >
          Fetch
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
      }}>
        {providers.map((provider) => (
          <div
            key={provider.uuid}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={provider.imgURL}
              alt={provider.firstName}
              width="100%"
              height="160"
              style={{ objectFit: 'cover' }}
            />
            <div style={{ padding: '16px' }}>
              <h3 style={{ margin: '10px 0 5px', fontSize: '18px', color: '#333' }}>
                {provider.firstName} {provider.middleName} {provider.lastName}
              </h3>
              <p><strong>Rating:</strong> {provider.rating} ⭐</p>
              <p><strong>Reviews:</strong> {provider.reviewCount}</p>
              <p><strong>Info:</strong> {provider.info}</p>
              <p><strong>Starting at:</strong> ₹{provider.startingPrice}</p>
              <p><strong>New:</strong> {provider.newSProvider ? 'Yes' : 'No'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServiceProvider;
