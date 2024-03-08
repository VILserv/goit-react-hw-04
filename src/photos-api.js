import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotos = async (searchQuery, page = 1) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      perPage: 12,
      page,
      orientation: "landscape",
    },
    headers: {
      Authorization: "Client-ID SqzrnGPkL3OCVjbHGVbyKUQZe6gXgaT5Hk2aaMhWduE",
    },
  });
  return response.data.results;
};
