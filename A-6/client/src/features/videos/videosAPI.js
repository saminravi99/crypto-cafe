import axios from "../../utils/axios";

export const getVideos = async (tags, search, pageNumber, author) => {
  let queryString = "";

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (author !== "") {
    queryString += `author_like=${author}`;
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const response = await axios.get(
    `/videos/?${queryString}&_page=${pageNumber}&_limit=8`
  );

  return response.data;
};
