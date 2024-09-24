import { CommentDTO } from '@/services/comments';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommentsState {
  comments: CommentDTO[];
}

const initialState: CommentsState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, action: PayloadAction<CommentDTO[]>) {
      state.comments = action.payload;
    },
    addComment(state, action: PayloadAction<CommentDTO>) {
      state.comments = [action.payload, ...state.comments];
    },
    removeComment(state, action: PayloadAction<number>) {
      state.comments = state.comments.filter((comment) => comment.id !== action.payload);
    },
  },
});

export const { setComments, addComment, removeComment } = commentsSlice.actions;
export default commentsSlice.reducer;
