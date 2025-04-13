import React, { useEffect, useState } from 'react';
import { getCustomers } from '../../utils/api'; // or rename this to getCategories if appropriate

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await getCustomers(setCategories);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Categories</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : categories.length === 0 ? (
        <p>No categories found.</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Category ID</th>
              <th>Category Name</th>
              <th>Image</th>
              <th>MongoDB _id</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat._id}>
                <td>{index + 1}</td>
                <td>{cat.category_id}</td>
                <td>{cat.category_name}</td>
                <td>
                  <img src={cat.image_url} alt={cat.category_name} width="100" height="60" />
                </td>
                <td>{cat._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllCategories;
