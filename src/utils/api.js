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