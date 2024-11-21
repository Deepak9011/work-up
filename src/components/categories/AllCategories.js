import React, { useEffect, useState } from 'react';
import { getCategories } from '../../utils/api';
import Card from './Card';

// Categories.js
function AllCategories() {
  const [categories, setCategories] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);  
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        await getCategories(setCategories);
      } catch (err) {
        setError('Error fetching categories');
      }
    };

    fetchCategories();
  }, []);  

  useEffect(() => {
    const delayRender = setTimeout(() => {
      if (categories !== 0) {
        setIsLoading(false);
      } 
      else {
        getCategories(setCategories); 
      }
    }, 3000); 

    return () => clearTimeout(delayRender);
  }, [isLoading]);
  if (isLoading) {
    return <p>Loading...</p>;  
  }

  if (error) {
    return <p>{error}</p>; 
  }

  // useEffect(() => {
  //   await getCategories(setCategories);
  //   setIsLoading(false);
  // }, [])

  // return (
  //   <>
  //       <h2>All Categories</h2>
  //       <Card title = {categories[0].category_name} imageUrl = "https://res.cloudinary.com/deeqsba43/image/upload/v1730733116/workup/categories/c0fkevsrpfxkf8yzzn0i.webp"/>
  //   </>
  // );
  function categoriesLoaded() {
    return (
      <>
        {categories.length > 0 ? (
        categories.map((category, index) => (
          <Card
            title={category.category_name}
            imageUrl={category.image_url || 'default-image-url'} 
          />
        ))
      ) : (
        <p>No categories available.</p>  
      )}
      </>
    );
  }

  return (
    <>
      <h2>All Categories</h2>
      <main className='categories'>
        <section>
          {categories ? (
            categoriesLoaded()
          ) : (
            <div className='spinner-container'>
              <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default AllCategories;
