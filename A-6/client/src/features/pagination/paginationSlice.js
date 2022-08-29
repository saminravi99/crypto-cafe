import { getVideosForPagination } from "./paginationAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  videosLength: 0,
  pageNumber: 1,
  isLoading: false,
  isError: false,
  error: "",
};

// async function to set pagination
export const fetchVideosForPagination = createAsyncThunk(
  "pagination/fetchVideos",
  async ({ tags, search, authorTag }) => {
    const videos = await getVideosForPagination(tags, search, authorTag);
    return videos;
  }
);

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosForPagination.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideosForPagination.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videosLength = action.payload.length;
      })
      .addCase(fetchVideosForPagination.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default paginationSlice.reducer;
export const { setPageNumber } = paginationSlice.actions;
