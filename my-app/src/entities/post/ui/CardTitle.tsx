interface CardTitleProps {
  title: string;
  [x: string]: any;
}

export const CardTitle = ({ title, ...props }: CardTitleProps) => {
  return (
    <h2 {...props} title={title.trim()}>
      {title.trim().length > 15
        ? title.trim().slice(0, 15) + "..."
        : title.trim()}
    </h2>
  );
};
