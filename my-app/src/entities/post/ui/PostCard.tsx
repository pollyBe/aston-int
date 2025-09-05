import { CommentList } from './CommentList';
import styles from './PostCard.module.css';

interface Comment {
  userName: string;
  comment: string;
}

interface PostCardProps {
  id: number;
  title: string;
  img: string;
  description: string;
  comments: Comment[];
  isOpen: boolean;
  onToggle: (id: number) => void;
}

export const PostCard = ({
  id,
  title,
  img,
  description,
  comments,
  isOpen,
  onToggle
}: PostCardProps) => {
  const { cardWrap, cardTitle, imgWrap, cardDescription, imgDefault } = styles;

  return (
    <div className={cardWrap}>
      <h2 className={cardTitle}>{title}</h2>
      <div className={imgWrap}>
        {img ? <img src={img} alt={title} /> : <div className={imgDefault}></div>}
      </div>
      <p className={cardDescription}>{description}</p>

      <CommentList
        comments={comments}
        isOpen={isOpen}
        onToggle={() => onToggle(id)}
      />
    </div>
  );
};
