import useComments from './hooks/useComments';

interface Props {
  postId: number | undefined;
}

const CommentList = ({ postId }: Props) => {
  if (!postId) return null;

  const { data, error, isLoading } = useComments();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {data?.map((comment) => (
        <li key={comment.id} className="list-group-item">
          {comment.body}
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
