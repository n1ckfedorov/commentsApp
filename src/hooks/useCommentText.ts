import { useEffect } from 'react';
import { UseFormSetValue } from 'react-hook-form';

interface CommentFormValues {
  body: string; // Add other fields if necessary
}

const useCommentText = (setValue: UseFormSetValue<CommentFormValues>) => {
  useEffect(() => {
    const savedText = sessionStorage.getItem('commentText');
    if (savedText) {
      setValue('body', savedText);
    }
  }, [setValue]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    sessionStorage.setItem('commentText', value);
    setValue('body', value);
  };

  return { handleChange };
};

export default useCommentText;
