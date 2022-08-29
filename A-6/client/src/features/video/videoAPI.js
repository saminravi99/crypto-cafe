import axios from "../../utils/axios";

export const getVideo = async (id) => {
  const response = await axios.get(`/videos/${id}`);

  return response.data;
};

export const postLikeThunk = async (id, likes) => {
  const response = await axios.patch(`/videos/${id}`, {
    likes: likes + 1,
  });

  return response.data;
};

export const postUnlikeThunk = async (id, unlikes) => {
  const response = await axios.patch(`/videos/${id}`, {
    unlikes: unlikes + 1,
  });

  return response.data;
};
