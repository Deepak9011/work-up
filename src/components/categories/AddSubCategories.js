import React, { useState, useEffect } from 'react';
import './AddSubCategories.css';

const API_URL = "https://workup.koyeb.app";

function AddSubCategories() {
  const [categoryId, setCategoryId] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [allSubcategories, setAllSubcategories] = useState({});

  // Load stored subcategories from localStorage on mount
  useEffect(() => {
    const storedData = localStorage.getItem('allSubcategories');
    if (storedData) {
      setAllSubcategories(JSON.parse(storedData));
    }
  }, []);

  // Save to localStorage on any update to allSubcategories
  useEffect(() => {
    localStorage.setItem('allSubcategories', JSON.stringify(allSubcategories));
  }, [allSubcategories]);

  useEffect(() => {
    if (!categoryId) return;

    const fetchSubcategories = async () => {
      try {
        const res = await fetch(`${API_URL}/categories/${categoryId}`);
        const data = await res.json();
        console.log("Fetched category data:", data);

        if (res.ok && Array.isArray(data.subcategories)) {
          setAllSubcategories((prev) => ({
            ...prev,
            [categoryId]: data.subcategories,
          }));
        } else {
          setAllSubcategories((prev) => ({
            ...prev,
            [categoryId]: [],
          }));
        }
      } catch (err) {
        console.error('Error fetching subcategories:', err);
        setErrorMsg('Error fetching subcategories');
      }
    };

    fetchSubcategories();
  }, [categoryId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (!categoryId || !subcategoryName) {
      setErrorMsg('Category ID and Subcategory Name are required.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/categories/addSubcategory`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category_id: categoryId,
          subcategory_name: subcategoryName,
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        setSuccessMsg('Subcategory added successfully!');
        setSubcategoryName('');

        const newSub = {
          subcategory_id: data.subcategory_id || '',
          subcategory_name: subcategoryName,
          tasks: [],
          _id: data._id || Date.now().toString(),
        };

        setAllSubcategories((prev) => ({
          ...prev,
          [categoryId]: prev[categoryId] ? [...prev[categoryId], newSub] : [newSub],
        }));
      } else {
        setErrorMsg(data.message || 'Failed to add subcategory');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="subcategories-container">
      <h2>Add Sub Categories</h2>
      <form onSubmit={handleSubmit} className="subcategory-form">
        <div>
          <label htmlFor="categoryId">Category ID</label>
          <input
            type="text"
            id="categoryId"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="subcategoryName">Subcategory Name</label>
          <input
            type="text"
            id="subcategoryName"
            value={subcategoryName}
            onChange={(e) => setSubcategoryName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Subcategory</button>
      </form>

      {successMsg && <p className="success-message">{successMsg}</p>}
      {errorMsg && <p className="error-message">{errorMsg}</p>}

      {Object.entries(allSubcategories).map(([catId, subcats]) => (
        <div key={catId} className="subcategory-table-container">
          <h3>Subcategories for Category ID: {catId}</h3>
          {subcats.length === 0 ? (
            <p>No subcategories found.</p>
          ) : (
            <table className="subcategory-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Subcategory ID</th>
                  <th>Subcategory Name</th>
                  <th>Tasks Count</th>
                </tr>
              </thead>
              <tbody>
                {subcats.map((item, index) => (
                  <tr key={item._id || index}>
                    <td>{index + 1}</td>
                    <td>{item.subcategory_id}</td>
                    <td>{item.subcategory_name}</td>
                    <td>{item.tasks?.length || 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
}

export default AddSubCategories;
