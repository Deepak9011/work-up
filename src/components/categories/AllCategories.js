import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { getCategories } from '../../utils/api';
import './AllCategories.css';

function AllCategories(props) {
  const { setCurrCategoriesState, setCategories } = props;
  const [categoriesData, setCategoriesData] = useState([
    {
      "_id": "66f4e7718399773491ed44a8",
      "category_name": "House Cleaning",
      "image_url": "https://res.cloudinary.com/deeqsba43/image/upload/v1730733116/workup/categories/c0fkevsrpfxkf8yzzn0i.webp",
      "category_id": "9d8c3cd6-7a65-4d4a-a2ea-4df6be56ca7f"
    },
    {
      "_id": "6728c7d0023d20c5e494f733",
      "category_name": "Plumbe",
      "image_url": "https://res.cloudinary.com/deeqsba43/image/upload/v1730733116/workup/categories/c0fkevsrpfxkf8yzzn0i.webp",
      "category_id": "21b739d8-8a80-4863-acb6-2f8eb3966310"
    },
    {
      "_id": "672900cde57e05c1ab3bacf8",
      "category_name": "Electrician",
      "image_url": "https://res.cloudinary.com/deeqsba43/image/upload/f_auto,q_auto/v1/workup/categories/tkqt98gborhrbnv6i29q?_a=BAMADKcc0",
      "category_id": "44b46fdc-d85c-418b-b353-1a2468e85a0c"
    },
    {
      "_id": "66f4e83f8399773491ed44b2",
      "category_name": "Painter",
      "image_url": "https://res.cloudinary.com/deeqsba43/image/upload/v1730733116/workup/categories/c0fkevsrpfxkf8yzzn0i.webp",
      "category_id": "a99e3af4-a492-4898-88ac-b5c00ec18726"
    },
    {
      "_id": "66f4e82f8399773491ed44b0",
      "category_name": "Cooking",
      "image_url": "https://res.cloudinary.com/deeqsba43/image/upload/v1730733116/workup/categories/c0fkevsrpfxkf8yzzn0i.webp",
      "category_id": "0e46401f-74a5-4fc8-8b9b-7d320ccfc7b6"
    },
    {
      "_id": "66f4e6ff8399773491ed44a6",
      "category_name": "Spa",
      "image_url": "https://res.cloudinary.com/deeqsba43/image/upload/f_auto,q_auto/v1/workup/categories/rcq6aumii5wo8s5wgcp9?_a=BAMADKcc0",
      "category_id": "514cc478-9782-4175-84d0-9c7a5934bbd6"
    },
    {
      "_id": "66f4e8148399773491ed44ae",
      "category_name": "Laundrysdf",
      "image_url": "https://res.cloudinary.com/deeqsba43/image/upload/f_auto,q_auto/v1/workup/categories/eqnw8t6ez143qtdvviib?_a=BAMADKOa0",
      "category_id": "0de46424-45da-470c-8409-eb817600f210"
    },
    {
      "_id": "672f270db2ecfdf39395ac6a",
      "category_name": "Carpenter",
      "image_url": "https://res.cloudinary.com/deeqsba43/image/upload/f_auto,q_auto/v1/workup/categories/llqedbienwyr6qp8f9dp?_a=BAMADKcc0",
      "category_id": "a9052c9e-1a1c-42d6-a0eb-8f754be4c16d"
    },
    {
      "_id": "672f0ff8b2ecfdf39395aa79",
      "category_name": "Gardener",
      "image_url": "https://res.cloudinary.com/deeqsba43/image/upload/f_auto,q_auto/v1/workup/categories/fdiogbprhaxwiy6aaqmp?_a=BAMADKcc0",
      "category_id": "4942702a-3945-4f77-9a37-2e74e2805941"
    }
  ]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        await getCategories(setCategoriesData);
        setError(null);
      } catch (err) {
        setError('Error fetching categories. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleArrowClick = (category) => {
    setCurrCategoriesState("subCategories");
    setCategories(category);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <p>Loading categories...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="categories-container">
      <h2>All Categories</h2>
      {categoriesData.length > 0 ? (
        <table className="categories-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category Name</th>
              <th>Image</th>
              <th>Category ID</th>
              <th>Sub Categories</th>
            </tr>
          </thead>
          <tbody>
            {categoriesData.map((category) => (
              <tr key={category._id}>
                <td>{category._id}</td>
                <td>{category.category_name}</td>
                <td>
                  <img
                    src={category.image_url}
                    alt={category.category_name}
                    className="category-image"
                  />
                </td>
                <td>{category.category_id}</td>
                <td>
                  <button
                    onClick={() => handleArrowClick(category)}
                    className="arrow-button"
                  >
                    <FiChevronRight className="arrow-icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
}

export default AllCategories;
