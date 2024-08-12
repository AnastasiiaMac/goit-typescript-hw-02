import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";

const ACCESS_KEY = "JisVWQgx6AEYtniKmKYXL6-p9RHdbQ5wUsL3pOu_pnY";
export const fetchImagesBySearchQuery = async <T>(
  searchQuery: string,
  currentPage: number
): Promise<T | undefined> => {
  const params: Record<string, string> = {
    query: searchQuery,
    page: currentPage.toString(),
    per_page: "20",
    client_id: ACCESS_KEY,
  };

  try {
    const response = await axios.get<T>(
      `search/photos/?${new URLSearchParams(params).toString()}`
    );
    return response.data;
  } catch (error: any) {
    console.error("Error fetching images:", error.message);
    return undefined;
  }
};
export default fetchImagesBySearchQuery;
