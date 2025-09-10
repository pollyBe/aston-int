import { posts } from '@/shared/lib/mocks/posts';
import { useParams } from 'react-router-dom';

export const UserPosts = () => {
  const { id } = useParams();
  const userPosts = posts.filter((p) => p.userId === Number(id));

  return (
    <div>
      <h2>Posts</h2>
      {userPosts.map((post) => (
        <div key={post.id} style={{ marginBottom: '15px' }}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};
