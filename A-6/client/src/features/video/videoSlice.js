import { getVideo, postLikeThunk, postUnlikeThunk } from "./videoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
  likesError: "",
  unlikesError: "",
};

// async function to fetch videos from the server
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const video = await getVideo(id);
  return video;
});

// async function to like a video
export const postVideoLike = createAsyncThunk(
  "video/postVideoLike",
  async ({ id, likes }) => {
    const videoLike = await postLikeThunk(id, likes);
    return videoLike;
  }
);

// async function to unlike a video
export const postVideoUnlike = createAsyncThunk(
  "video/postVideoUnlike",
  async ({ id, unlikes }) => {
    const videoUnlike = await postUnlikeThunk(id, unlikes);
    return videoUnlike;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(postVideoLike.fulfilled, (state, action) => {
        state.video.likes = action.payload.likes;
      })
      .addCase(postVideoLike.rejected, (state, action) => {
        state.likesError = action.error?.message;
      })
      .addCase(postVideoUnlike.fulfilled, (state, action) => {
        state.video.unlikes = action.payload.unlikes;
      })
      .addCase(postVideoUnlike.rejected, (state, action) => {
        state.unlikesError = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
