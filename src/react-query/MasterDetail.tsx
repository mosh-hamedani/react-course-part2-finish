import { useState } from 'react';
import CommentList from './CommentList';
import PostList from './PostList';

const MasterDetail = () => {
  const [selectedPostId, setSelectedPostId] = useState<number>();

  return (
    <div className="row">
      <div className="col">
        <PostList />
      </div>
      <div className="col">
        <CommentList postId={selectedPostId} />
      </div>
    </div>
  );
};

export default MasterDetail;
