import axios from "../../utils/axios";

export const getVideosForPagination = async (tags, search, authorTag) => {
  let queryString = "";

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (tags?.length > 0 && authorTag !== "") {
    queryString += `&author_like=${authorTag}`;
  }

  if (authorTag !== "" && tags?.length === 0) {
    queryString += `author_like=${authorTag}`;
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const response = await axios.get(`/videos/?${queryString}`);

  return response.data;
};
