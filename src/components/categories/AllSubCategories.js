import React, { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import './AllSubCategories.css';

function AllSubCategories(props) {
  const { setCurrCategoriesState, categories, setSubCategories } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedSubCategories, setExpandedSubCategories] = useState({});
  const { categoryId } = useParams();

  const [categoryData, setCategoryData] = useState({
        "_id": "66f4e82f839977349A1ed44b0",
        "category_name": "Cooking",
        "image_url": "https://res.cloudinary.com/deeqsba43/image/upload/v1730733116/workup/categories/c0fkevsrpfxkf8yzzn0i.webp",
        "image_id": "workup/categories/c0fkevsrpfxkf8yzzn0i",
        "category_id": "0e46401f-74a5-4fc8-8b9b-7d320ccfc7b6",
        "subcategories": [
            {
                "subcategory_id": "7d4617b6-c9dc-446c-a83a-3ca769df6ff4",
                "subcategory_name": "North Indian",
                "tasks": [
                    {
                        "task_id": "01795c54-88c4-40e6-9555-f0b6d9be5675",
                        "task_name": "Dal Chawal",
                        "price": 150,
                        "_id": "66fe946845810a160a2d37f5"
                    }
                ],
                "_id": "66fe91a80add26fc62340f95"
            },
            {
                "subcategory_id": "3d2f247f-986d-476f-8f5f-175610a1dd3e",
                "subcategory_name": "Baked Food",
                "tasks": [
                    {
                        "task_id": "bace71c6-cfdb-4046-a91f-18c53febe420",
                        "task_name": "Bread",
                        "price": 200,
                        "_id": "672de38f8bd11c77476adc4e"
                    },
                    {
                        "task_id": "93d89c78-fe7b-4861-bee3-24c32e68f797",
                        "task_name": "Cake",
                        "_id": "672de3be8bd11c77476adc59"
                    },
                    {
                        "task_id": "c74be148-d35c-45a3-9420-93f3304fe52a",
                        "task_name": "Pastries and Croissants",
                        "price": 150,
                        "_id": "672de3fa8bd11c77476adc65"
                    },
                    {
                        "task_id": "70821d37-771a-4cae-a556-627e4764d3e4",
                        "task_name": "Cookies and Biscuits",
                        "price": 300,
                        "_id": "672de4108bd11c77476adc72"
                    },
                    {
                        "task_id": "fea98daa-fc28-4985-bd43-eed6b6adca91",
                        "task_name": "Muffins, Cupcakes and Brownies",
                        "_id": "672de4ae8bd11c77476adc8f"
                    }
                ],
                "_id": "672de1f08bd11c77476adc2c"
            },
            {
                "subcategory_id": "59c655ae-25f2-4ec1-a190-ec517998f2a3",
                "subcategory_name": "Main Course",
                "tasks": [
                    {
                        "task_id": "f37e4c93-ef27-42f2-9ceb-8f51ee2dc019",
                        "task_name": "Lunch Preparation",
                        "price": 200,
                        "_id": "672e59139fb6f60e84f00eb1"
                    },
                    {
                        "task_id": "7d7dc10c-2c3e-4224-8525-9837224f373a",
                        "task_name": "Dinner Preparation",
                        "price": 250,
                        "_id": "672e59389fb6f60e84f00ec1"
                    }
                ],
                "_id": "672de2058bd11c77476adc33"
            },
            {
                "subcategory_id": "e2631784-5d31-4589-b515-602af0eab193",
                "subcategory_name": "Diet Specific Cooking",
                "tasks": [
                    {
                        "task_id": "5bf53843-a531-4e1f-94f9-a575e3ca74fe",
                        "task_name": "Keto Diet",
                        "price": 400,
                        "_id": "672e5cb49fb6f60e84f00ef0"
                    },
                    {
                        "task_id": "995d90df-1284-4bda-b7db-410bfef2e944",
                        "task_name": "Vegan Diet",
                        "price": 400,
                        "_id": "672e5cea9fb6f60e84f00f02"
                    },
                    {
                        "task_id": "6c248391-0375-45f7-94b7-b0d224171d75",
                        "task_name": "Gluten-FreeDiet",
                        "price": 500,
                        "_id": "672e5d049fb6f60e84f00f15"
                    }
                ],
                "_id": "672de2258bd11c77476adc3b"
            },
            {
                "subcategory_id": "95c87fad-8cc1-4d4f-9336-71a0d542fcf4",
                "subcategory_name": "On-Demand  Help",
                "tasks": [
                    {
                        "task_id": "d9050d62-915c-4131-87f5-1c276c4b7a5d",
                        "task_name": "Event & Party Catering (Small)",
                        "price": 1500,
                        "_id": "672e5e7c9fb6f60e84f00f3b"
                    },
                    {
                        "task_id": "7be4234f-f2e3-4fb9-9137-817840a102f9",
                        "task_name": "Regional &Traditional Cooking for Festivals",
                        "_id": "672e5ee99fb6f60e84f00f50"
                    }
                ],
                "_id": "672de2488bd11c77476adc44"
            }
        ],
        "__v": 3
    });

  useEffect(() => {
    const fetchAllSubCategories = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (err) {
        setError('Error fetching subcategories. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchAllSubCategories();
  }, [categoryId]);

  const toggleSubcategory = (subcategoryId) => {
    setExpandedSubCategories(prev => ({
      ...prev,
      [subcategoryId]: !prev[subcategoryId]
    }));
  };

  const handleBackClick = () => {
    setCurrCategoriesState("categories");
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading subcategories...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="subcategories-container">
      <div className="header-section">
        <button onClick={handleBackClick} className="back-button">
          <FiChevronLeft className="back-icon" />
          Back to Categories
        </button>
        <h2 className="category-title">
          <img 
            src={categoryData.image_url} 
            alt={categoryData.category_name} 
            className="category-icon"
          />
          {categoryData.category_name}
        </h2>
      </div>

      <div className="table-container">
        <table className="subcategories-table">
          <thead>
            <tr>
              <th>Subcategory</th>
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categoryData.subcategories.map((subcategory) => (
              <React.Fragment key={subcategory.subcategory_id}>
                <tr className="subcategory-row">
                  <td>
                    <button 
                      onClick={() => toggleSubcategory(subcategory.subcategory_id)}
                      className="expand-button"
                    >
                      {expandedSubCategories[subcategory.subcategory_id] ? 
                        <FiChevronDown className="expand-icon" /> : 
                        <FiChevronRight className="expand-icon" />
                      }
                      {subcategory.subcategory_name}
                    </button>
                  </td>
                  <td>{subcategory.tasks.length} tasks</td>
                  <td>
                    <button className="action-button edit">Edit</button>
                    <button className="action-button delete">Delete</button>
                  </td>
                </tr>
                
                {expandedSubCategories[subcategory.subcategory_id] && (
                  <tr className="tasks-row">
                    <td colSpan="3">
                      <div className="tasks-container">
                        <h4>Tasks in {subcategory.subcategory_name}</h4>
                        <table className="tasks-table">
                          <thead>
                            <tr>
                              <th>Task Name</th>
                              <th>Price</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {subcategory.tasks.map((task) => (
                              <tr key={task.task_id}>
                                <td>{task.task_name}</td>
                                <td>{task.price ? `₹${task.price}` : 'Price not set'}</td>
                                <td>
                                  <button className="task-action-button edit">Edit</button>
                                  <button className="task-action-button delete">Delete</button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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


// import React, { useEffect, useState } from 'react';
// import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
// import { useParams } from 'react-router-dom';
// import './AllSubCategories.css';

// function AllSubCategories() {
//   const {setCurrCategoriesState, categories, setSubCategories} = props;
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [expandedAllSubCategories, setExpandedAllSubCategories] = useState({});
//   const { categoryId } = useParams();

//   const [subCategoriesData, setSubCategoriesData] = useState({
//     "_id": "66f4e82f8399773491ed44b0",
//     "category_name": "Cooking",
//     "image_url": "https://res.cloudinary.com/deeqsba43/image/upload/v1730733116/workup/categories/c0fkevsrpfxkf8yzzn0i.webp",
//     "image_id": "workup/categories/c0fkevsrpfxkf8yzzn0i",
//     "category_id": "0e46401f-74a5-4fc8-8b9b-7d320ccfc7b6",
//     "subcategories": [
//         {
//             "subcategory_id": "7d4617b6-c9dc-446c-a83a-3ca769df6ff4",
//             "subcategory_name": "North Indian",
//             "tasks": [
//                 {
//                     "task_id": "01795c54-88c4-40e6-9555-f0b6d9be5675",
//                     "task_name": "Dal Chawal",
//                     "price": 150,
//                     "_id": "66fe946845810a160a2d37f5"
//                 }
//             ],
//             "_id": "66fe91a80add26fc62340f95"
//         },
//         {
//             "subcategory_id": "3d2f247f-986d-476f-8f5f-175610a1dd3e",
//             "subcategory_name": "Baked Food",
//             "tasks": [
//                 {
//                     "task_id": "bace71c6-cfdb-4046-a91f-18c53febe420",
//                     "task_name": "Bread",
//                     "price": 200,
//                     "_id": "672de38f8bd11c77476adc4e"
//                 },
//                 {
//                     "task_id": "93d89c78-fe7b-4861-bee3-24c32e68f797",
//                     "task_name": "Cake",
//                     "_id": "672de3be8bd11c77476adc59"
//                 },
//                 {
//                     "task_id": "c74be148-d35c-45a3-9420-93f3304fe52a",
//                     "task_name": "Pastries and Croissants",
//                     "price": 150,
//                     "_id": "672de3fa8bd11c77476adc65"
//                 },
//                 {
//                     "task_id": "70821d37-771a-4cae-a556-627e4764d3e4",
//                     "task_name": "Cookies and Biscuits",
//                     "price": 300,
//                     "_id": "672de4108bd11c77476adc72"
//                 },
//                 {
//                     "task_id": "fea98daa-fc28-4985-bd43-eed6b6adca91",
//                     "task_name": "Muffins, Cupcakes and Brownies",
//                     "_id": "672de4ae8bd11c77476adc8f"
//                 }
//             ],
//             "_id": "672de1f08bd11c77476adc2c"
//         },
//         {
//             "subcategory_id": "59c655ae-25f2-4ec1-a190-ec517998f2a3",
//             "subcategory_name": "Main Course",
//             "tasks": [
//                 {
//                     "task_id": "f37e4c93-ef27-42f2-9ceb-8f51ee2dc019",
//                     "task_name": "Lunch Preparation",
//                     "price": 200,
//                     "_id": "672e59139fb6f60e84f00eb1"
//                 },
//                 {
//                     "task_id": "7d7dc10c-2c3e-4224-8525-9837224f373a",
//                     "task_name": "Dinner Preparation",
//                     "price": 250,
//                     "_id": "672e59389fb6f60e84f00ec1"
//                 }
//             ],
//             "_id": "672de2058bd11c77476adc33"
//         },
//         {
//             "subcategory_id": "e2631784-5d31-4589-b515-602af0eab193",
//             "subcategory_name": "Diet Specific Cooking",
//             "tasks": [
//                 {
//                     "task_id": "5bf53843-a531-4e1f-94f9-a575e3ca74fe",
//                     "task_name": "Keto Diet",
//                     "price": 400,
//                     "_id": "672e5cb49fb6f60e84f00ef0"
//                 },
//                 {
//                     "task_id": "995d90df-1284-4bda-b7db-410bfef2e944",
//                     "task_name": "Vegan Diet",
//                     "price": 400,
//                     "_id": "672e5cea9fb6f60e84f00f02"
//                 },
//                 {
//                     "task_id": "6c248391-0375-45f7-94b7-b0d224171d75",
//                     "task_name": "Gluten-FreeDiet",
//                     "price": 500,
//                     "_id": "672e5d049fb6f60e84f00f15"
//                 }
//             ],
//             "_id": "672de2258bd11c77476adc3b"
//         },
//         {
//             "subcategory_id": "95c87fad-8cc1-4d4f-9336-71a0d542fcf4",
//             "subcategory_name": "On-Demand  Help",
//             "tasks": [
//                 {
//                     "task_id": "d9050d62-915c-4131-87f5-1c276c4b7a5d",
//                     "task_name": "Event & Party Catering (Small)",
//                     "price": 1500,
//                     "_id": "672e5e7c9fb6f60e84f00f3b"
//                 },
//                 {
//                     "task_id": "7be4234f-f2e3-4fb9-9137-817840a102f9",
//                     "task_name": "Regional &Traditional Cooking for Festivals",
//                     "_id": "672e5ee99fb6f60e84f00f50"
//                 }
//             ],
//             "_id": "672de2488bd11c77476adc44"
//         }
//     ],
//     "__v": 3
// }) 

//   // In a real app, you would fetch this data from your API
//   // For this example, we'll use the provided data directly
//   useEffect(() => {
//     const fetchAllSubCategories = async () => {
//       setIsLoading(true);
//       try {
//         // Simulate API call
//         setTimeout(() => {
//           const mockData = {
//             "_id": "66f4e7718399773491ed44a8",
//             "category_name": "House Cleaning",
//             "image_url": "https://res.cloudinary.com/deeqsba43/image/upload/v1730733116/workup/categories/c0fkevsrpfxkf8yzzn0i.webp",
//             "image_id": "workup/categories/c0fkevsrpfxkf8yzzn0i",
//             "category_id": "9d8c3cd6-7a65-4d4a-a2ea-4df6be56ca7f",
//             "AllSubCategories": [
//               // ... your AllSubCategories data here ...
//             ],
//             "__v": 0
//           };
//           setCategory(mockData);
//           setIsLoading(false);
//         }, 500);
//       } catch (err) {
//         setError('Error fetching AllSubCategories. Please try again later.');
//         setIsLoading(false);
//       }
//     };

//     fetchAllSubCategories();
//   }, [categoryId]);

//   const toggleSubcategory = (subcategoryId) => {
//     setExpandedAllSubCategories(prev => ({
//       ...prev,
//       [subcategoryId]: !prev[subcategoryId]
//     }));
//   };

//   if (isLoading) {
//     return (
//       <div className="loading-container">
//         <p>Loading AllSubCategories...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="error-message">{error}</div>;
//   }

//   if (!category) {
//     return <div className="no-data">No category data available.</div>;
//   }

//   return (
//     <div className="AllSubCategories-container">
//       <div className="category-header">
//         <img 
//           src={category.image_url} 
//           alt={category.category_name} 
//           className="category-image"
//         />
//         <h2>{category.category_name}</h2>
//       </div>

//       <div className="AllSubCategories-table-container">
//         <table className="AllSubCategories-table">
//           <thead>
//             <tr>
//               <th>Subcategory</th>
//               <th>Tasks</th>
//               <th>Price</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {category.AllSubCategories.map((subcategory) => (
//               <React.Fragment key={subcategory.subcategory_id}>
//                 <tr 
//                   className="subcategory-row"
//                   onClick={() => toggleSubcategory(subcategory.subcategory_id)}
//                 >
//                   <td>{subcategory.subcategory_name}</td>
//                   <td>{subcategory.tasks.length} tasks</td>
//                   <td>₹{subcategory.tasks[0]?.price || 'N/A'} each</td>
//                   <td className="arrow-cell">
//                     {expandedAllSubCategories[subcategory.subcategory_id] ? (
//                       <FiChevronDown className="arrow-icon" />
//                     ) : (
//                       <FiChevronRight className="arrow-icon" />
//                     )}
//                   </td>
//                 </tr>
//                 {expandedAllSubCategories[subcategory.subcategory_id] && (
//                   <tr className="tasks-container">
//                     <td colSpan="4">
//                       <table className="tasks-table">
//                         <thead>
//                           <tr>
//                             <th>Task Name</th>
//                             <th>Price</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {subcategory.tasks.map((task) => (
//                             <tr key={task.task_id} className="task-row">
//                               <td>{task.task_name}</td>
//                               <td>₹{task.price}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </td>
//                   </tr>
//                 )}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default AllSubCategories;