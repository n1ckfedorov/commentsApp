import { useEffect } from 'react';

const useCommentText = (setValue: (name: string, value: string) => void) => {
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
