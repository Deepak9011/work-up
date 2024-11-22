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


export async function addCategory(setState, values) {
  try {
    const input = {
      category_name: "Check",
      image: "hello", // Assuming the API accepts image as a base64 string or URL
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

export async function addSubCategory(setState) {
  try {
    const url = API_URL + `/categories/addSubcategory`;
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