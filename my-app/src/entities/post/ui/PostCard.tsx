import styles from './PosstCard.module.css'
interface PostCardProps {
  title: string,
  img: string,
  description: string,
}

export const PostCard = ({ title, img, description }: PostCardProps) => {
  const { cardWrap, cardTitle, imgWrap, cardDescription, imgDefault } = styles;
  return (
    <div className={cardWrap}>
    <h2 className={cardTitle}>{title}</h2>
    <div className={imgWrap}>
      {img ? (
        <img src={img} alt={title} />
      ) : (
        <div className={imgDefault}></div>
      )}
    </div>
    <p className={cardDescription}>{description}</p>
  </div>
  )
}