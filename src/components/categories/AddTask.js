import React, { useState } from 'react';
import './AddTask.css';

function AddTask() {
  const [formData, setFormData] = useState({
    category_id: '',
    subcategory_id: '',
    task_name: '',
    price: '',
  });

  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fetched, setFetched] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const encodedData = new URLSearchParams();
    for (const key in formData) {
      encodedData.append(key, formData[key]);
    }

    try {
      const res = await fetch("https://workup.koyeb.app/categories/addTask", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encodedData.toString()
      });

      const data = await res.json();
      console.log('Task added successfully:', data);

      setTaskList(prev => [...prev, data]);
      setFormData({
        category_id: '',
        subcategory_id: '',
        task_name: '',
        price: '',
      });
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  const getTasks = async () => {
    if (!formData.category_id || !formData.subcategory_id) {
      setError('Please enter Category ID and Subcategory ID');
      return;
    }

    setError('');
    setLoading(true);
    setFetched(false);

    const encodedData = new URLSearchParams();
    encodedData.append('category_id', formData.category_id);
    encodedData.append('subcategory_id', formData.subcategory_id);

    try {
      const res = await fetch("https://workup.koyeb.app/categories/getTask", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encodedData.toString()
      });

      const data = await res.json();
      console.log('Fetched tasks:', data);
      setTaskList(data);
      setFetched(true);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setError('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="task-form-container">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
          placeholder="Category ID"
          required
        />
        <input
          type="text"
          name="subcategory_id"
          value={formData.subcategory_id}
          onChange={handleChange}
          placeholder="Subcategory ID"
          required
        />
        <input
          type="text"
          name="task_name"
          value={formData.task_name}
          onChange={handleChange}
          placeholder="Task Name"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <button type="submit">Add Task</button>
        <button type="button" onClick={getTasks}>Fetch Tasks</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Loading tasks...</p>}

      {fetched && taskList.length === 0 && <p>No tasks found.</p>}

      {taskList.length > 0 && (
        <div className="task-table">
          <h3>Tasks</h3>
          <table>
            <thead>
              <tr>
                <th>Task ID</th>
                <th>Task Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {taskList.map((task, index) => (
                <tr key={index}>
                  <td>{task.task_id || task._id}</td>
                  <td>{task.task_name}</td>
                  <td>{task.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AddTask;
