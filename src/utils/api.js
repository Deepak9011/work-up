import { API_URL } from "./constants";

export async function getCategories(setState) {
    try {
      const url = API_URL + `/customers/getCategories`;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data[2].category_name);
    // data.forEach((data) => {
    //     console.log(data.category_name);
    //   });
      setState(data)
    } catch(err) {
      console.error(err)
    }
}


export async function addCategory(setState, categories_name, categories_img) {
  try {
    const input = {
      category_name: categories_name,
      image: categories_img, // Assuming the API accepts image as a base64 string or URL
  };


    const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(input), // Convert the data to JSON
  });

    const url = API_URL + `/categories/addCategory`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}



export async function addTask(setState) {
  try {
    const url = API_URL + `/categories/addTask`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}

export async function updateCategories(setState) {
  try {
    const url = API_URL + `/categories/updateCategory`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}

export async function updateSubcategory(setState) {
  try {
    const url = API_URL + `/categories/updateSubcategory`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}
// export async function addTask(setState) {
//   try {
//     const url = API_URL + `/customers/addTask`;
//     const resp = await fetch(url);
//     const data = await resp.json();
//     console.log(data[2].category_name);
//   // data.forEach((data) => {
//   //     console.log(data.category_name);
//   //   });
//     setState(data)
//   } catch(err) {
//     console.error(err)
//   }
// }
// export async function addTask(setState) {
//   try {
//     const url = API_URL + `/customers/addTask`;
//     const resp = await fetch(url);
//     const data = await resp.json();
//     console.log(data[2].category_name);
//   // data.forEach((data) => {
//   //     console.log(data.category_name);
//   //   });
//     setState(data)
//   } catch(err) {
//     console.error(err)
//   }
// }

export const getTasks = async (category_id, subcategory_id) => {
  const encodedData = new URLSearchParams();
  encodedData.append('category_id', category_id);
  encodedData.append('subcategory_id', subcategory_id);

  try {
    const res = await fetch(`${API_URL}/categories/getTask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encodedData.toString()
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error fetching tasks:', err);
    return [];
  }
};











