// Categories.js
import React from 'react';
import { getCategories } from '../utils/api';

function Categories(props) {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getCategories(setCategories)
  }, [])

  return (
    <>
      <h2>Categories Content</h2>
    </>
  );
}

export default Categories;
