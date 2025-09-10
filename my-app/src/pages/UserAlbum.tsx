import { albums } from '@/shared/lib/mocks/albums';
import { useParams, Outlet, Link } from 'react-router-dom';

export const UserAlbum = () => {
  const { id } = useParams();
  const userAlbums = albums.filter((a) => a.userId === Number(id));

  if (!userAlbums.length) {
    return <p>no albums</p>;
  }

  return (
    <div>
      <h2>User albums</h2>
      <ul>
        {userAlbums.map((album) => (
          <li key={album.id}>
            <Link to={`${album.id}/photos`}>{album.title}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
};
