import React, { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import './AllSubCategories.css';

function AllSubCategories() {
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedAllSubCategories, setExpandedAllSubCategories] = useState({});
  const { categoryId } = useParams();

  // In a real app, you would fetch this data from your API
  // For this example, we'll use the provided data directly
  useEffect(() => {
    const fetchAllSubCategories = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        setTimeout(() => {
          const mockData = {
            "_id": "66f4e7718399773491ed44a8",
            "category_name": "House Cleaning",
            "image_url": "https://res.cloudinary.com/deeqsba43/image/upload/v1730733116/workup/categories/c0fkevsrpfxkf8yzzn0i.webp",
            "image_id": "workup/categories/c0fkevsrpfxkf8yzzn0i",
            "category_id": "9d8c3cd6-7a65-4d4a-a2ea-4df6be56ca7f",
            "AllSubCategories": [
              // ... your AllSubCategories data here ...
            ],
            "__v": 0
          };
          setCategory(mockData);
          setIsLoading(false);
        }, 500);
      } catch (err) {
        setError('Error fetching AllSubCategories. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchAllSubCategories();
  }, [categoryId]);

  const toggleSubcategory = (subcategoryId) => {
    setExpandedAllSubCategories(prev => ({
      ...prev,
      [subcategoryId]: !prev[subcategoryId]
    }));
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <p>Loading AllSubCategories...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!category) {
    return <div className="no-data">No category data available.</div>;
  }

  return (
    <div className="AllSubCategories-container">
      <div className="category-header">
        <img 
          src={category.image_url} 
          alt={category.category_name} 
          className="category-image"
        />
        <h2>{category.category_name}</h2>
      </div>

      <div className="AllSubCategories-table-container">
        <table className="AllSubCategories-table">
          <thead>
            <tr>
              <th>Subcategory</th>
              <th>Tasks</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {category.AllSubCategories.map((subcategory) => (
              <React.Fragment key={subcategory.subcategory_id}>
                <tr 
                  className="subcategory-row"
                  onClick={() => toggleSubcategory(subcategory.subcategory_id)}
                >
                  <td>{subcategory.subcategory_name}</td>
                  <td>{subcategory.tasks.length} tasks</td>
                  <td>₹{subcategory.tasks[0]?.price || 'N/A'} each</td>
                  <td className="arrow-cell">
                    {expandedAllSubCategories[subcategory.subcategory_id] ? (
                      <FiChevronDown className="arrow-icon" />
                    ) : (
                      <FiChevronRight className="arrow-icon" />
                    )}
                  </td>
                </tr>
                {expandedAllSubCategories[subcategory.subcategory_id] && (
                  <tr className="tasks-container">
                    <td colSpan="4">
                      <table className="tasks-table">
                        <thead>
                          <tr>
                            <th>Task Name</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {subcategory.tasks.map((task) => (
                            <tr key={task.task_id} className="task-row">
                              <td>{task.task_name}</td>
                              <td>₹{task.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllSubCategories;