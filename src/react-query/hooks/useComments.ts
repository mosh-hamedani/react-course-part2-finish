import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
  postId: number;
}

const useComments = () =>
  useQuery<Comment[], Error>({
    queryKey: ['comments'],
    queryFn: () =>
      axios
        .get('https://jsonplaceholder.typicode.com/comments', {})
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1m
  });

export default useComments;
