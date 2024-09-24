export type CommentResponse = {
  comments: CommentDTO[];
  total: number;
  skip: number;
  limit: number;
};

export type CommentDTO = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
};

type User = {
  id: number;
  username: string;
  fullName: string;
};
