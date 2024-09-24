import axios from 'axios';
import { endpoints } from '../endpoints';
import { CommentResponse } from './comments.types';

console.log(endpoints.comments);

export const fetchAllComments = async (skip: number, limit: number) => {
	const response = await axios.get<CommentResponse>(
		`${endpoints.comments}?_start=${skip}&_limit=${limit}`
	);
	return response.data;
};
