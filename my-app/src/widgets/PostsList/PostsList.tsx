import { useCallback, useState } from "react";
import { PostCard } from "@/entities/post/ui/PostCard";
import styles from "./PostsList.module.css";

interface Comment {
  userName: string;
  comment: string;
}

interface Post {
  id: number;
  title: string;
  img: string;
  description: string;
  comments: Comment[];
}

interface PostListProps {
  data: Post[];
}

export const PostsList = ({ data }: PostListProps) => {
  const { postsListWrap } = styles;
  const [openPostId, setOpenPostId] = useState<number | null>(null);

  const handleToggle = useCallback((id: number) => {
    setOpenPostId(prev => (prev === id ? null : id));
  }, []);

  return (
    <div className={postsListWrap}>
      {data.map((post) => (
        <PostCard
        key={post.id}
        {...post}
        isOpen={openPostId === post.id}
        onToggle={handleToggle}
      />
      ))}
    </div>
  );
};
