import useCommentText from '@/hooks/useCommentText'; // Импортируем хук
import { addComment } from '@/store/comments/commentsSlice';
import { RootState } from '@/store/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { z } from 'zod';

interface CommentFormValues {
  body: string;
}

const schema = z.object({
  body: z.string().min(1, 'Comment is required').max(200, 'Comment must be less than 200 characters'),
});

const AddCommentForm: React.FC = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.comments.comments);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CommentFormValues>({
    resolver: zodResolver(schema),
  });

  const { handleChange } = useCommentText(setValue); // Используем хук

  const onSubmit: SubmitHandler<CommentFormValues> = (data) => {
    const maxId = comments.length > 0 ? Math.max(...comments.map((comment) => comment.id)) : 0;
    const newComment = {
      id: maxId + 1,
      body: data.body,
      postId: 1,
      likes: 0,
      user: {
        id: 1,
        username: 'admin',
        fullName: 'Admin',
      },
    };
    dispatch(addComment(newComment));
    sessionStorage.removeItem('commentText');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="relative w-full">
        <textarea
          {...register('body')}
          onChange={handleChange}
          placeholder="Add a comment"
          className="border p-2 w-full"
        />
        {errors.body && <span className="text-red-500 text-xs absolute left-0 top-full">{errors.body.message}</span>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Submit
      </button>
    </form>
  );
};

export default AddCommentForm;
