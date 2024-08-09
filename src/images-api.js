import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";
const fetchImagesBySearchQuery = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/photos", {
    // headers: {
    //   "Accept-Version": "v1",
    // },
    params: {
      client_id: "JisVWQgx6AEYtniKmKYXL6-p9RHdbQ5wUsL3pOu_pnY",
      query: searchQuery,
      page: currentPage,
      per_page: 20,
    },
  });
  console.log(response.data.results);
  return response.data;
};
export default fetchImagesBySearchQuery;
