import { CommentItem } from '@/components';
import AddCommentForm from '@/components/AddCommentForm';

import { useScrollRestoration } from '@/hooks/useScrollRestoration';
import { fetchAllComments } from '@/services/comments';
import { removeComment, setComments } from '@/store/comments/commentsSlice';
import { RootState } from '@/store/store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.comments.comments);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await fetchAllComments(0, 10);
        dispatch(setComments(data.comments));
      } catch (error) {
        console.error(error);
      }
    };

    fetchComments();
  }, [dispatch]);

  const handleDelete = (id: number) => {
    dispatch(removeComment(id));
  };

  useScrollRestoration();

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl text-center">Comments - Section</h1>
          <AddCommentForm />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comments.length === 0 ? (
              <div className="col-span-2 bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-gray-500">No comments found.</p>
              </div>
            ) : (
              comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} onDelete={() => handleDelete(comment.id)} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
