import { useEffect, useRef } from "react";
import styles from './PostCard.module.css'

interface Comment {
  userName: string;
  comment: string;
}

interface CommentListProps {
  comments: Comment[];
  isOpen: boolean;
  onToggle: () => void;
}

export const CommentList = ({ comments, isOpen, onToggle }: CommentListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { commentsWrap, commentsOpen, buttonComments } = styles;
  useEffect(() => {
    if (isOpen && containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={containerRef}
        className={isOpen ? `${commentsWrap} ${commentsOpen}`: commentsWrap}
      >
        {isOpen && (
          comments.length === 0 ? (
            <div style={{ fontStyle: "italic", color: "#666" }}>
              No comments yet
            </div>
          ) : (
            comments.map((item, idx) => (
              <div key={idx}>
                <strong>{item.userName}:</strong> {item.comment}
              </div>
            ))
          )
        )}
      </div>
      <button onClick={onToggle} className={buttonComments}>
        {isOpen ? "Hide Comments" : "Comments"}
      </button>
    </>
  );
};
