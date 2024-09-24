import { CommentDTO } from '@/services/comments';
import { FC } from 'react';

interface CommentProps {
  comment: CommentDTO;
  onDelete: (id: number) => void;
}

export const CommentItem: FC<CommentProps> = ({ comment, onDelete }) => {
  return (
    <div key={comment.id} className="p-4 bg-white rounded-lg shadow-md flex justify-between items-start">
      <div className="flex-grow">
        <p className="text-sm text-gray-500">
          Posted by {comment.user.fullName} ({comment.user.username})
        </p>
        <p className="mt-2 text-gray-700">{comment.body}</p>
        <p className="mt-1 text-xs text-gray-400">{comment.likes} likes</p>
      </div>
      <button
        onClick={() => onDelete(comment.id)}
        className="ml-4 px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};
