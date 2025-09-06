import { useCallback, useMemo, useState } from "react";
import { PostCard } from "@/entities/post/ui/PostCard";
import styles from "./PostsList.module.css";
import { filterByLength } from "@/features/PostLengthFilter/lib/filterByLength";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";

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
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  const handleToggle = useCallback((id: number) => {
    setOpenPostId(prev => (prev === id ? null : id));
  }, []);

  const filteredPosts = useMemo(
    () => filterByLength(data, min, max),
    [data, min, max]
  );

  return (
    <div>
      <PostLengthFilter
        onFilterChange={(minVal, maxVal) => {
          setMin(minVal);
          setMax(maxVal);
        }}
      />
      <div className={postsListWrap}>
        {filteredPosts.map((post) => (
          <PostCard
          key={post.id}
          {...post}
          isOpen={openPostId === post.id}
          onToggle={handleToggle}
      />
      ))}
      </div>
    </div>
  );
};
