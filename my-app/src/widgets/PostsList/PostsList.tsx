import { PostCard } from "@/entities/post/ui/PostCard";
import styles from "./PostsList.module.css";

interface Post {
  title: string;
  img: string;
  description: string;
}

interface PostListProps {
  data: Post[];
}

export const PostsList = ({ data }:PostListProps) => {
  const { postsListWrap } = styles;

  return (
    <div className={postsListWrap}>
      {data.map(({ title, img, description }, index) => (
        <PostCard
          key={index}
          title={title}
          img={img}
          description={description}
        />
      ))}
    </div>
  );
};
