import { photos } from '@/shared/lib/mocks/photos';
import { useParams } from 'react-router-dom';

export const AlbumPhotos = () => {
  const { albumId } = useParams();
  const albumPhotos = photos.filter((p) => p.albumId === Number(albumId));

  if (!albumPhotos.length) {
    return <p>no photos yet</p>;
  }

  return (
    <div>
      <h3>photos</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {albumPhotos.map((photo) => (
          <img key={photo.id} src={photo.url} alt={photo.title} width={150} />
        ))}
      </div>
    </div>
  );
};
