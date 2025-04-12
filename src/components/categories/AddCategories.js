import React, { useState } from 'react';
import './AddCategories.css';

function AddCategories() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [categoryList, setCategoryList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image) {
      setMessage('Please provide both name and image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);

    try {
      const res = await fetch('https://workup.koyeb.app/categories/addCategory', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        const newCategory = {
          category_id: data?.category?.category_id || Date.now(),
          name,
          image: URL.createObjectURL(image),
        };

        setCategoryList((prev) => [...prev, newCategory]);
        setMessage('Category added successfully!');
        setName('');
        setImage(null);
      } else {
        setMessage(data?.message || 'Failed to add category.');
      }
    } catch (err) {
      setMessage('Something went wrong!');
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-heading">Add New Category</h2>

        <div className="form-group">
          <label className="form-label" htmlFor="name">Category Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="image">Upload Image</label>
          <input
            className="form-input"
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        <button className="form-button" type="submit">Submit</button>

        {message && (
          <p className={`form-message ${message.includes('success') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
      </form>

      {categoryList.length > 0 && (
        <div className="category-table">
          <h3>Added Categories</h3>
          <div className="row header-row">
            <div className="col">Category ID</div>
            <div className="col">Name</div>
            <div className="col">Image</div>
          </div>
          {categoryList.map((cat, index) => (
            <div className="row" key={index}>
              <div className="col">{cat.category_id}</div>
              <div className="col">{cat.name}</div>
              <div className="col">
                <img src={cat.image} alt="category" className="thumb-img" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddCategories;
